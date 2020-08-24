import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { todosMeses, obterMes } from '../../../util/utils';
import { getYear, getMonth, format } from 'date-fns';
import { EStatusPartilha } from '../../../../models/DbModels';
import { UsuarioService } from '../../usario/usuario.service';
import { startWith, map } from 'rxjs/operators';
import { PartilhaSolidariaService } from '../../../partilha-solidaria/partilha-solidaria.service';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { DialogShowcaseComponent } from './dialog-showcase/dialog-showcase.component';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ngx-partilha-lista',
  templateUrl: './partilha-lista.component.html',
  styleUrls: ['./partilha-lista.component.scss'],
})
export class PartilhaListaComponent implements OnInit {
  meses = todosMeses;
  faExchangeAlt = faExchangeAlt;
  anoAtual = getYear(new Date());
  filtroStatus = 'EM_ANALISE';
  statuss = Object.keys(EStatusPartilha).map(it => ({k: it, v: EStatusPartilha[it]}));
  usuarios;
  comprovantes;
  comprovanteEscolhido;
  verAtividade = false;
  checkeds = new Set();
  form = this.fb.group({
    ano: this.anoAtual,
    mes: getMonth(new Date()),
    usuario: null,
    status: 'EM_ANALISE',
    dataPrevistaRecebimento: null,
  });

  constructor(private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private partilhaService: PartilhaSolidariaService,
    private dialogService: NbDialogService,
    private toastrservice: NbToastrService) { }

    caixa = 0;
    enviaram = 0;
    faltam = 0;
    doado = 0;
    depositado = 0;

  ngOnInit(): void {
    this.partilhaService.buscar(this.form.value).subscribe(res => {
      this.comprovantes = res;
    });
    this.partilhaService.valoresGestao(this.form.value).subscribe(res => {
      this.caixa = res.caixa;
      this.enviaram = res.enviaram;
      this.faltam = res.faltam;
      this.doado = res.doado;
      this.depositado = res.depositado;
    });
    this.form.controls.usuario.valueChanges.subscribe(
      value => this.usuarios = this.usuarioService.seminaristasAtivosAutocomplete(value).pipe(
        startWith(''),
        map(values => values || []),
      ),
    );
  }

  alterarStatus() {
    const ids = Array.from(this.checkeds);
    this.dialogService.open(DialogShowcaseComponent, {
      context: {
        status: EStatusPartilha[this.filtroStatus],
      },
    }).onClose.subscribe(name => {
         if (name.submit) {
           this.partilhaService.alterarStatus({
             ids,
             status: this.filtroStatus,
             justificativa: name.aprovacao.justificativa,
             aprovado: name.aprovacao.aprovado,
             valorDepositado: name.deposito.valorDepositado,
             dataDeposito: name.deposito.dataDeposito,
            })
             .subscribe(res => {
               this.toastrservice.success('', 'Status das solicitações foram alterados com sucesso');
               this.buscar();
             }, err => {
               this.toastrservice.danger(err.error.errors, 'Erro!');
             });
         }
       });
  }

  viewHandle(value) {
    if (value && value.name) {
      return value.name;
    } else {
      return value;
    }
  }

  buscar() {
    // this.partilhaService.gerarDocumento().subscribe(res => {console.log(res)})
    this.partilhaService.buscar(this.form.value).subscribe(res => {
      this.comprovantes = res;
      this.filtroStatus = this.form.value.status;
      this.checkeds.clear();
    });
  }

  mes(mes: number) {
    return obterMes(mes);
  }

  obterStatus(status: string) {
    return EStatusPartilha[status];
  }

  mostrarAtividade(comprovante) {
    this.comprovanteEscolhido = comprovante;
    this.verAtividade = true;
  }

  ocultarAtividade() {
    this.comprovanteEscolhido = null;
    this.verAtividade = false;
  }

  toggle(checked: boolean, id) {
    if (checked) {
      this.checkeds.add(id);
    } else {
      this.checkeds.delete(id);
    }
  }

  isChecked(id) {
    return this.checkeds.has(id);
  }

  formataData(data) {
    return format(new Date(data), 'dd/MM/yyyy');
  }

  podeAlterar() {
    return this.filtroStatus === 'EM_ANALISE' || this.filtroStatus === 'APROVADO';
  }

  downloadComprovante(comprovante) {
    this.partilhaService.obterArquivoComprovante(comprovante)
  }
}
