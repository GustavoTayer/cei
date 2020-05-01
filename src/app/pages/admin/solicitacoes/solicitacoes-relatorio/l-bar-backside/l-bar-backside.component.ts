import { Component, Input, OnDestroy, AfterViewInit, SimpleChanges, OnChanges } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { NbThemeService } from '@nebular/theme';
import { LayoutService } from '../../../../../@core/utils';
@Component({
  selector: 'ngx-l-bar-backside',
  templateUrl: './l-bar-backside.component.html',
  styleUrls: ['./l-bar-backside.component.scss'],
})
export class LBarBacksideComponent implements AfterViewInit, OnDestroy , OnChanges {
  private alive = true;

  @Input() data: any;
  @Input() frequencia: 'mes' | 'ano';
  dataCharge;
  option: any = {};
  echartsInstance: any;
  labels;
  constructor(private theme: NbThemeService,
              private layoutService: LayoutService) {
    this.layoutService.onSafeChangeLayoutSize()
      .pipe(
        takeWhile(() => this.alive),
      )
      .subscribe(() => this.resizeChart());
  }

  setLabels(frequencia) {
    if (frequencia === 'mes') {
      this.labels = [
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
    } else {
      this.labels = this.data.map(it => it.data).sort();
    }
  }

  onChartInit(ec) {
    this.echartsInstance = ec;
  }

  resizeChart() {
    if (this.echartsInstance) {
      this.echartsInstance.resize();
    }
  }

  setDataCharge(data = [], frequencia) {
    if (frequencia === 'mes') {
      this.dataCharge = Array(12).fill(0);
    }
    data.forEach(element => {
      this.dataCharge[element.data - 1] = element.valor.toFixed(2);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data) {
      if (changes.frequencia) {
        this.setLabels(changes.frequencia.currentValue);
      }
      const frequencia = changes.frequencia ? changes.frequencia.currentValue : this.frequencia;
      this.setDataCharge(changes.data.currentValue, frequencia);
      if (this.echartsInstance) {
        this.echartsInstance.setOption({
          series: [{
            data: this.dataCharge,
          }],
          xAxis: {
            data: this.labels,
          },
          tooltip: {
            formatter: 'R$ {c0}',
          },
        });
      }
    }
  }

  ngAfterViewInit() {
    this.theme.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(config => {
        const trafficTheme: any = config.variables.trafficBarEchart;

        this.option = Object.assign({}, {
          grid: {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            containLabel: true,
          },
          xAxis: {
            type : 'category',
            data : this.labels,
            axisLabel: {
              color: trafficTheme.axisTextColor,
              fontSize: trafficTheme.axisFontSize,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
          },
          yAxis: {
            show: false,
            axisLine: {
              show: true,
            },
            axisLabel: {
              show: true,
            },
            axisTick: {
              show: false,
            },
            boundaryGap: [0, '5%'],
          },
          tooltip: {
            axisPointer: {
              type: 'shadow',
            },
            textStyle: {
              color: trafficTheme.tooltipTextColor,
              fontWeight: trafficTheme.tooltipFontWeight,
              fontSize: 16,
            },
            position: 'top',
            backgroundColor: trafficTheme.tooltipBg,
            borderColor: trafficTheme.tooltipBorderColor,
            borderWidth: 1,
            formatter: 'R$ {c0}',
            extraCssText: trafficTheme.tooltipExtraCss,
          },
          series: [
            {
              type: 'bar',
              barWidth: '40%',
              data: this.data,
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: trafficTheme.gradientFrom,
                  }, {
                    offset: 1,
                    color: trafficTheme.gradientTo,
                  }]),
                  opacity: 1,
                  shadowColor: trafficTheme.gradientFrom,
                  shadowBlur: trafficTheme.shadowBlur,
                },
              },
            },
          ],
        });
    });
  }
  ngOnDestroy() {
    this.alive = false;
  }
}
