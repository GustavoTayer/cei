import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { getDay, getMonth, getYear } from 'date-fns';
interface IData {
  result: IResult[];
  data1: number;
  data2: number;
}

interface IResult {
  count: number;
  pagoEm: Date;
  name: string;
  porcentagem: number;
  data: number;
  usuario: string;
}

@Component({
  selector: 'ngx-list-venda-seminarista',
  templateUrl: './list-venda-seminarista.component.html',
  styleUrls: ['./list-venda-seminarista.component.scss'],
})
export class ListVendaSeminaristaComponent implements OnInit, OnDestroy, OnChanges {
  revealed = false;
  @Input() frequencia: 'semana' | 'mes' | 'ano';
  @Input() frontCardData;
  selectedItem;
  constructor() {
  }
  data;

  trackByDate(_, item) {
    return item.date;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.frontCardData) {
      const f = changes.frequencia ? changes.frequencia.currentValue : this.frequencia;
      this.setData(changes.frontCardData.currentValue, f);
    }
  }

  ngOnInit() {
    this.setData(this.frontCardData, this.frequencia);
  }

  revealBack(item) {
    this.revealed = true;
    this.selectedItem = item;
  }

  revealFront() {
    this.revealed = false;
  }

  setData(data: IData, frequencia) {
    const x = {};
    ((data && data.result) || []).forEach(element => {
      const usuario = element.usuario;
      if (!x[element.usuario]) {
        x[usuario] = {name: element.name, series: []};
      }
      let tempo: 'A' | 'P';
      if (element.data === data.data1) {
        tempo = 'A';
      } else if (element.data === data.data2) {
        tempo = 'P';
      }
      if (tempo) {
        x[usuario][`data${tempo}`] = this.getDataFormatada(frequencia, element.data);
        x[usuario][`count${tempo}`] = element.count;
        x[usuario][`porc${tempo}`] = element.porcentagem;
      }
      x[usuario].series.push({data: element.data, valor: element.count});
    });
    this.data = Object.keys(x).map(it => x[it]);
  }

  ngOnDestroy() {
  }

  getPorcentagem(valor) {
    return ((valor * 100 / 14000) - 100).toFixed(2);
  }

  getDataAtual(frequencia: 'semana' | 'mes' | 'ano') {
    switch (frequencia) {
      case 'semana':
        return getDay(new Date());
      case 'mes':
        return getMonth(new Date()) + 1;
      case 'ano':
        return getYear(new Date());
    }
  }

  getDataFormatada(frequencia: 'semana' | 'mes' | 'ano', data: number) {
    switch (frequencia) {
      case 'semana':
        return this.getDiaSemana(data);
      case 'mes':
        return this.getMesFormatado(data);
      case 'ano':
        return data;
    }
  }

  getDiaSemana(dia: number) {
    const c = [null, 'Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.'];
    return c[dia];
  }

  getMesFormatado(mes: number) {
    const meses = [
      0,
      'Jan.',
      'Fev.',
      'Mar.',
      'Abr.',
      'Mai.',
      'Jun.',
      'Jul.',
      'Ago.',
      'Set.',
      'Out.',
      'Nov.',
      'Dez.',
    ];
    return meses[mes];
  }
}
