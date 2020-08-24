import { Injectable } from '@angular/core';
import { getYear, endOfMonth, addMonths, setDate, endOfDay, format, isBefore } from 'date-fns';
import { HttpClient } from '@angular/common/http';
import { SECURED_URL } from '../../auth/urls';
import { NbToastrService } from '@nebular/theme';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { IAdiantamento } from '../../models/DbModels';

@Injectable({
  providedIn: 'root',
})
export class PartilhaSolidariaService {

  constructor(private http: HttpClient, private toastrService: NbToastrService) { }
  URL = `${SECURED_URL}/partilha`;
  URL_ADIANTAMENTO = `${SECURED_URL}/partilha-adiantamento`;
  enviarComprovante(comprovante) {
    return this.http.post<any>(`${this.URL}/criar`, comprovante).pipe(
      map(res => {
        this.toastrService.success('Aguarde aprovação', 'Comprovante enviado com sucesso!')
        return res;
      }),
      catchError(err => {
        this.toastrService.danger(err.error.errors, 'Erro!');
        return of(false);
      }),
    );
  }

  editarComprovante(comprovante) {
    return this.http.post(`${this.URL}/editar`, comprovante).pipe(
      map(res => {
        this.toastrService.success('Aguarde aprovação', 'Comprovante enviado com sucesso!')
        return res;
      }),
      catchError(err => {
        this.toastrService.danger(err.error.errors, 'Erro!');
        return of(false);
      }),
    );
  }
  lista(filtro?: {}) {
    return this.http.get(`${this.URL}/lista`).pipe(
      map(res => {
        return res;
      }),
      catchError(err => {
        this.toastrService.danger(err.error.errors, 'Erro!');
        return of(false);
      }),
    );
  }

  buscar(filtro?: {}) {
    return this.http.post(`${this.URL}/buscar`, filtro).pipe(
      map(res => {
        return res;
      }),
      catchError(err => {
        this.toastrService.danger(err.error.errors, 'Erro!');
        return of(false);
      }),
    );
  }

  obterDoc(file) {
    return this.http.post(`${SECURED_URL}/partilha/obterDoc2`, {file}, {responseType: 'blob'});
  }
  obterArquivoComprovante(comprovante) {
    const {file} = comprovante;
    this.obterDoc(file).subscribe(data => {
      // this.createImageFromBlob(data);
      const downloadURL = window.URL.createObjectURL(data);
      const link = document.createElement('a');
      link.href = downloadURL;
      link.download = `${comprovante.usuario.name}_${comprovante.ano}${comprovante.mes + 1}`
      link.click();
    }, error => {
      this.toastrService.danger('', 'Arquivo não encontrado')
    });
}

  calculaDataPrevista(mes: number, year: number): { success: boolean, data: Date } {
    const now = new Date();
    const janela1 = endOfDay(endOfMonth(new Date(year, mes, 1)));
    const janela2 = endOfDay(setDate(addMonths(janela1, 1), 9));
    if (isBefore(now, janela1)) {
      return {
        success: true,
        data: new Date(getYear(now), mes + 1, 5),
      };
    } else if (isBefore(now, janela2)) {
      return {
        success: true,
        data: new Date(getYear(now), mes + 1, 10),
      };
    } else {
      return {
        success: false,
        data: new Date(getYear(now), mes + 2, 5),
      };
    }
  }

  alterarStatus(campos) {
    return this.http.post(`${this.URL}/alterar-status`, campos);
  }

  gerarDocumento() {
    return this.http.get(`${this.URL}/gerarRelatorio`);
  }

  adiantamentoLista(filtro) {
    return this.http.post<IAdiantamento[]>(`${this.URL_ADIANTAMENTO}/lista`, filtro);
  }

  adiantamentoCriar(form) {
    return this.http.post(`${this.URL_ADIANTAMENTO}/criar`, form);
  }

  valoresGestao(form?: any) {
    return this.http.post<
      { caixa: number, enviaram: number, faltam: number, doado: number, depositado: number }
    >(`${this.URL}/valoresGestao`, form);
  }

  obterPartilha(id: string) {
    return this.http.post<any>(`${this.URL}/buscarPorId`, {id})
  }
}
