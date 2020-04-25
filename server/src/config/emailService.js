const enviarEmail = (email) => {
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey('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');
  const {subject, text} = email;
  const msg = {
    to: 'tayergustavo@gmail.com', // email fixado para n sair enviando email pras pessoas na fase de teste
    from: 'tayergustavo@hotmail.com',
    subject,
    text,
  };

  sgMail.send(msg).then(sss => sss).catch(err => console.log(err.response.body.errors));
}

module.exports = {enviarEmail}
