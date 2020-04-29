import { Component, OnInit } from '@angular/core';
import { SolicitacaoProdutoService } from '../../../../solicitacao-produto/solicitacao-produto.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ngx-produtos-graf-linha',
  templateUrl: './produtos-graf-linha.component.html',
  styleUrls: ['./produtos-graf-linha.component.scss'],
})
export class ProdutosGrafLinhaComponent implements OnInit {
  valores;
  multi: any[];
  view: any[] = [700, 300];
  frequencia = new FormControl('semana');

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Ano';
  yAxisLabel: string = 'Quantidade';
  timeline: boolean = false;

  colorScheme = {
    domain: [],
  };

  constructor(private solicitacaoService: SolicitacaoProdutoService) {
  }

  ngOnInit() {
    this.solicitacaoService.relProd('semana')
      .subscribe(res => this.setData(res, 'semana'));

    this.frequencia.valueChanges.subscribe( value =>
      this.solicitacaoService.relProd(value)
        .subscribe(res => {
          this.colorScheme.domain = [];
          this.setData(res, value);
        }),
    );
  }

  setData(res, frequencia) {
    const x = {};

    res.forEach(element => {
      if (!x[element.produtoId]) {
        this.colorScheme.domain.push(element.cor);
         x[element.produtoId] = {
           name: element.nome,
           series: this.getSeries(frequencia),
         };
      }
      if (frequencia === 'mes') {
        x[element.produtoId].series.push({
          name: element.dia,
          value: element.count,
        });
      } else {
        x[element.produtoId].series[element.dia].value = element.count;
      }
    });
    this.multi = Object.keys(x).map(it => x[it]);
  }

  getSeries(frequencia) {
    switch (frequencia) {
      case 'semana':
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
     case 'mes':
       return [];
     case 'ano':
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
