import { Component, OnInit } from '@angular/core';

import { NbMenuItem } from '@nebular/theme';
import { HttpClient } from '@angular/common/http';
import { SECURED_URL } from '../auth/urls';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit {

  menu: NbMenuItem[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get<{menu: NbMenuItem[]}>(`${SECURED_URL}/user/menuAdmin`).subscribe((res) => {
      console.log(res)
      if (res.menu) {
        this.menu = res.menu;
      }
    });
  }
}
