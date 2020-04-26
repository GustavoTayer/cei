// import {v4 as uuidV4 } from 'uuid';
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('./user');
const env = require('../../.env');
const emailRegex = /\S+@\S+\.\S+/;
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/;
const UsuarioConvidado = require('../usuario_convidado/UsuarioConvidado')
const sendErrorsFromDB = (res, dbErrors) => {
    const errors = [];
    _.forIn(dbErrors.errors, error => errors.push(error.message));
    return res.status(400).json({errors})
};

const usuarioLogado = (req, res, next) => {
  const id = req.decoded._id
  User.findById(id, {
    _id: 1, name: 1, bd: 1, email: 1, comunidade: 1, equipe: 1, hierarquia: 1, ativo: 1, tolkenConvite: 1
  },(err, usr) => {
    if(err) {
      return sendErrorsFromDB(res, err)
    } else {
      return res.json(usr)
    }
  })

}

const usuariosSelect = (req, res, next) => {
  User.find({}, {_id: 1, name: 1}, (err, users) => {
    if(err) {
      return sendErrorsFromDB(res, err)
    } else {
      return res.json(users)
    }
  })
}

const userList = (req, res, next) => {
  const filtro = req.body.filtro;
  const query = {}
  if(filtro && filtro.nome) {
    query['name'] = {$regex: `${filtro.nome}`}
  }
  User.find(query, {_id: 1, name: 1, comunidade: 1}, (err, users) => {
    if(err) {
      return sendErrorsFromDB(res, err)
    } else {
      return res.json(users)
    }
  } )
}

const atualizarUsuario = (req, res, next) => {
  dadosUsuario = req.body;
  id = dadosUsuario._id
  delete dadosUsuario._id
  User.findById(id, (err, user) => {
    if(err) {
      console.log(err)
      return sendErrorsFromDB(res, err)
    } else {
      user.bd = dadosUsuario.bd
      user.comunidade = dadosUsuario.comunidade
      user.hierarquia = dadosUsuario.hierarquia
      user.equipe = dadosUsuario.equipe
      user.ativo = dadosUsuario.ativo
      user.name = dadosUsuario.name
      user.coordenaEquipe = dadosUsuario.coordenaEquipe

      user.save((erro, u)=> {
        if(erro) {
          console.log(erro)
        } else {
          return res.status(200).json('ok')
        }
      })
    }
  })
}
const atualizarUsuarioLogado = (req, res, next) => {
  dadosUsuario = req.body;
  const id = req.decoded._id
  id = dadosUsuario._id
  delete dadosUsuario._id
  User.findById(id, (err, user) => {
    if(err) {
      console.log(err)
      return sendErrorsFromDB(res, err)
    } else {
      user.bd = dadosUsuario.bd
      user.comunidade = dadosUsuario.comunidade
      // user.equipe = dadosUsuario.equipe
      // user.ativo = dadosUsuario.ativo
      user.name = dadosUsuario.name
      // user.coordenaEquipe = dadosUsuario.coordenaEquipe
      if(dadosUsuario.mudarSenha) {
        if(!dadosUsuario.password) {
          return res.status(400).send({errors: [
            "Senha é obrigatório"
        ]})
        }
        if(!dadosUsuario.password_confirm) {
          return res.status(400).send({errors: ['Confirmação de senha é obrigatório']})
        }
        if(!dadosUsuario.password.match(passwordRegex)) {
          return res.status(400).send({errors: [
                  "Senha precisar ter: uma letra maiúscula, uma letra minúscula, um número, uma caractere especial(@#$%) e tamanho entre 6-20."
              ]})
        }

        const salt = bcrypt.genSaltSync();
        const passwordHash = bcrypt.hashSync(dadosUsuario.password, salt);
        if(!bcrypt.compareSync(dadosUsuario.password_confirm, passwordHash)) {
            return res.status(400).send({errors: ['Senhas não conferem.']})
        }
        user.password = passwordHash
      }
      user.save((erro, u)=> {
        if(erro) {
          console.log(erro)
        } else {
          return res.status(200).json('ok')
        }
      })
    }
  })
}

const findById = (req, res, next) => {
  User.findById(req.body.id, {
    _id: 1, name: 1, bd: 1, email: 1, comunidade: 1, equipe: 1, hierarquia: 1, ativo: 1, tolkenConvite: 1
  }, (err, user) => {
    if(err) {
      return sendErrorsFromDB(res, err)
    } else {
      return res.json(user)
    }
  })
}

const login = (req, res, next) => {
    const email = req.body.email || '';
    const password = req.body.password || '';
    User.findOne({email}, (err, user) => {
        if (err) {
            return sendErrorsFromDB(res, err)
        } else if (user && bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign(user.toJSON(), env.authSecret, {
                expiresIn: "1 day"
            });
            const {name, email} = user;
            return res.json({name, email, token})
        } else {
            return res.status(400).send({errors: ['Usuário/Senha inválidos']})
        }
    })
};

const validateToken = (req, res, next) => {
    const token = req.body.token || '';
    jwt.verify(token, env.authSecret, function(err, decoded) {
        return res.status(200).send({valid: !err})
    })
};

const signup = (req, res, next) => {
  User.find({}, (err, usr) => {
    if(err) {
      return sendErrorsFromDB(res, err)
    } else if(usr && usr.length) {
      const name = req.body.name || '';
    const email = req.body.email || '';
    const password = req.body.password || '';
    const confirmPassword = req.body.confirm_password || '';
    const conviteId = req.body.conviteId;
    if(!conviteId) {
      return res.status(400).send({errors: ['O Id do convite é obrigatório']})
    }
    if(!email.match(emailRegex)) {
        return res.status(400).send({errors: ['O e-mail informado está inválido']})
    }
    if(!password.match(passwordRegex)) {
        return res.status(400).send({errors: [
                "Senha precisar ter: uma letra maiúscula, uma letra minúscula, um número, uma caractere especial(@#$%) e tamanho entre 6-20."
            ]})
    }

    const salt = bcrypt.genSaltSync();
    const passwordHash = bcrypt.hashSync(password, salt);
    if(!bcrypt.compareSync(confirmPassword, passwordHash)) {
        return res.status(400).send({errors: ['Senhas não conferem.']})
    }
    User.findOne({email}, (err, user) => {
        if(err) {
            return sendErrorsFromDB(res, err)
        } else if (user) {
            return res.status(400).send({errors: ['Usuário já cadastrado.']})
        } else {
            UsuarioConvidado.findOne({_id: conviteId, email}, (err, convite) => {
              if(err) {
                return sendErrorsFromDB(res, err)
              } else if(!convite) {
                return res.status(400).send({errors: ['Convite não encontrado']})
              } else {
                const newUser = new User({ name, email, password: passwordHash });
                newUser.save(err => {
                    if(err) {
                        return sendErrorsFromDB(res, err)
                    } else {
                      UsuarioConvidado.findByIdAndDelete(convite._id).exec(err => {
                        if(err) {
                          console.log(err)
                        }
                        login(req, res, next)
                      })
                    }
                })
              }
            })

        }
    })
    } else {
      signUpAdmin(req,res,next)
    }
  })

};


const signUpAdmin = (req, res, next) => {
  const salt = bcrypt.genSaltSync();
  const passwordHash = bcrypt.hashSync('admin', salt);
  const newUser = new User({ name: 'admin', email: 'tayergustavo@hotmail.com', password: passwordHash });
  newUser.save(err => {
      if(err) {
        return sendErrorsFromDB(res, err)
      } else {
        login(req, res, next)
      }
  })
}

module.exports = { login, signup, validateToken, usuariosSelect, userList, findById, atualizarUsuario, usuarioLogado }
