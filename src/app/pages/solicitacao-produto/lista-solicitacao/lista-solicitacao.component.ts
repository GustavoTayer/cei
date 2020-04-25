import { Component, OnInit } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'ngx-lista-solicitacao',
  templateUrl: './lista-solicitacao.component.html',
  styleUrls: ['./lista-solicitacao.component.scss'],
})
export class ListaSolicitacaoComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay(),
  );
  // private mobile: boolean;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
  }

}
