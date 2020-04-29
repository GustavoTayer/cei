import { Component, OnInit } from '@angular/core';
import { SolicitacaoProdutoService } from '../../../../solicitacao-produto/solicitacao-produto.service';
import * as moment from 'moment';

@Component({
  selector: 'ngx-horizontal-bar',
  templateUrl: './horizontal-bar.component.html',
  styleUrls: ['./horizontal-bar.component.scss'],
})
export class HorizontalBarComponent implements OnInit {

  multi = [
  ];
  view: any[] = [700, 500];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  legendPosition: string = 'below';
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Seminarista';
  showYAxisLabel: boolean = true;
  xAxisLabel = 'Valor vendido';

  colorScheme = {
    domain: ['#5AA454', '#a83248'],
  };
  schemeType: string = 'ordinal';

  constructor(private SolicitacaoService: SolicitacaoProdutoService) {
  }
  ngOnInit() {
    this.SolicitacaoService.relatorio()
      .subscribe(res => {
        this.setData(res);
      });
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

  setData(data) {
    const date = moment();
    this.multi = data
      .filter(it => it.month === (date.month() + 1))
      .map(it => ({
        name: it.name,
        series: [{
          name: date.format('MMM'),
          value: it.count,
        }],
      }));
  }

}
