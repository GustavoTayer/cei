import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import {getYear, format} from 'date-fns';
import { EStatusSolicitacao } from '../../../../../models/DbModels';

export enum EFrequencia {
  diario = 'diario',
  semanal = 'semanal',
  mensal = 'mensal',
  anual = 'anual',
}

@Component({
  selector: 'ngx-produtos-graf-linha',
  templateUrl: './produtos-graf-linha.component.html',
  styleUrls: ['./produtos-graf-linha.component.scss'],
})
export class ProdutosGrafLinhaComponent implements OnInit, OnChanges {
  @Input() values: any[];
  @Input() infosFiltro: {frequencia: EFrequencia, start: Date, end: Date};
  @Input() color: string[] | undefined;
  @Input() status: boolean;
  @Input() yAxisLabel: string;
  valores;
  multi: any[];
  view: any[] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Ano';

  timeline: boolean = false;

  colorScheme = {
    domain: [],
  };

  constructor() {
  }

  ngOnInit() {
    const {frequencia, start, end} = this.infosFiltro;
    if (this.values) {
      this.setData(this.values, frequencia, start, end);
    }
    this.setXAxisLabel(frequencia);
  }

  setXAxisLabel(frequencia: EFrequencia ) {
    if (frequencia) {
      switch (frequencia) {
        case EFrequencia.anual:
          this.xAxisLabel = 'ano';
          break;
        case EFrequencia.diario:
          this.xAxisLabel = 'Dia da Semana';
          break;
        case EFrequencia.mensal:
          this.xAxisLabel = 'Mês';
          break;
        case EFrequencia.semanal:
          this.xAxisLabel = 'Dia';
          break;
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.values) {
      const {frequencia, start, end} = changes.infosFiltro ? changes.infosFiltro.currentValue : this.infosFiltro;
      this.setXAxisLabel(frequencia);
      this.setData(changes.values.currentValue, frequencia, start, end);
    }
  }


  setData(res = [], frequencia: EFrequencia, start: Date, end: Date) {
    // console.log(res)
    let x = {};
    if (this.color && this.color.length) {
      this.colorScheme = {
        domain: this.color,
      };
    } else {
      this.colorScheme = {
        domain: [],
      };
    }

    if (frequencia === EFrequencia.semanal) {
      x = this.getFrequenciaMensal(res);
    } else {
      res.forEach(element => {
      if (!x[element.produtoId]) {
        if (!(this.color && this.color.length)) {
          this.colorScheme.domain.push(element.cor);
        }
         x[element.produtoId] = {
           name: this.status ? EStatusSolicitacao[element.nome] :  element.nome,
           series: this.getSeries(frequencia, start, end),
         };
      }
      if (frequencia === EFrequencia.anual) {
        const startYear = getYear(start);
        const index = element.dia - startYear;
        x[element.produtoId].series[index].value = element.count;
      } else {
        x[element.produtoId].series[element.dia].value = element.count;
      }
     });
    }
    const multi = Object.keys(x).map(it => x[it]);
    this.multi = this.status ? this.statusData(multi) : multi;
  }

  statusData(multi) {
    Object.keys(EStatusSolicitacao).forEach(it => {
      if (it !== 'PAGO' && !multi.some(m => m.name === EStatusSolicitacao[it])) {
        multi.push({name: EStatusSolicitacao[it], series: []});
      }
    });
    return multi.sort((a, b) => {
      return (a.name).localeCompare(b.name);
    });
  }

  getFrequenciaMensal(res) {
    const x = new Set();
    res.forEach(it => x.add(format(new Date(it.dataDesejada), 'dd/MM')));
    const y = {};

    res.forEach(element => {
      if (!y[element.produtoId]) {
        this.colorScheme.domain.push(element.cor);
         y[element.produtoId] = {
           name: this.status ? EStatusSolicitacao[element.nome] :  element.nome,
           series: this.getFrequenciaMes(Array.from(x)),
         };
      }
      y[element.produtoId].series[
          Array.from(x)
          .findIndex(it => it === format(new Date(element.dataDesejada), 'dd/MM'))
        ].value = element.count;
    });
    return y;
  }

  getFrequenciaMes(dias: any[]) {
    return dias.sort((a, b) => {
      const a1 = a.split('/');
      const a2 = a1[1] + a1[0];
      const b1 = b.split('/');
      const b2 = b1[1] + b1[0];
      return Number(a2) - Number(b2);
    }).map(dia => ({
      name: `${dia}`,
      value: 0,
    }));
  }

  getSeries(frequencia: EFrequencia, start: Date, end: Date) {
    switch (frequencia) {
      case EFrequencia.diario:
        return [{
          name: 'Dom',
          value: 0,
        },
        {
         name: 'Seg',
         value: 0,
        },
        {
         name: 'Ter',
         value: 0,
        },
        {
         name: 'Qua',
         value: 0,
        },
        {
         name: 'Qui',
         value: 0,
        },
        {
         name: 'Sex',
         value: 0,
        },
        {
         name: 'Sab',
         value: 0,
        },
     ];
     case EFrequencia.semanal:
      return [];
     case EFrequencia.anual:
      let startYear = getYear(start);
      const endYear = getYear(end);
      const s = [];
      for (startYear; startYear <= endYear; startYear++) {

        s.push({
          name: `${startYear}`,
          value: 0,
        });
      }
      return s;
     case EFrequencia.mensal:
       return [{
        name: 'Jan',
        value: 0,
      },
      {
       name: 'Fev',
       value: 0,
      },
      {
       name: 'Mar',
       value: 0,
      },
      {
       name: 'Abr',
       value: 0,
      },
      {
       name: 'Mai',
       value: 0,
      },
      {
       name: 'Jun',
       value: 0,
      },
      {
       name: 'Jul',
       value: 0,
      },
      {
       name: 'Ago',
       value: 0,
      },
      {
       name: 'Set',
       value: 0,
      },
      {
       name: 'Out',
       value: 0,
      },
      {
       name: 'Nov',
       value: 0,
      },
      {
       name: 'Dez',
       value: 0,
      },
   ];
    }
  }

  onSelect(data): void {
    // console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    // console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    // console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
