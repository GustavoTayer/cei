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

  menu: NbMenuItem[];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.menu = [
      {
        title: 'Dashboard',
        icon: 'text-outline',
        link: '/pages/dashboard',
        home: true,
      },
      {
        title: 'Partilha Solidária',
        icon: 'gift-outline',
        link: '/pages/dashboard',
      },
      {
        title: 'Minhas solicitações',
        icon: 'cube-outline',
        link: '/pages/solicitacao-produto',
      },
      {
        title: 'Escalas',
        icon: 'briefcase-outline',
        link: '/pages/dashboard',
      },
      {
        title: 'Calendário',
        icon: 'calendar-outline',
        link: '/pages/dashboard',
      },
      // {
      //   title: 'Admin',
      //   icon: 'lock-outline',
      //   children: [
      //     {
      //       title: 'Produtos',
      //       icon: 'cube-outline',
      //       link: '/pages/admin/produto',
      //     },
      //     {
      //       title: 'Solicitações',
      //       icon: 'list-outline',
      //       link: '/pages/admin/solicitacoes',
      //     },
      //     {
      //       title: 'Usuários',
      //       icon: 'person-outline',
      //       link: '/pages/admin/usuarios',
      //     },
      //   ],
      // },
      // {
      //   title: 'FEATURES',
      //   group: true,
      // },
      // {
      //   title: 'Auth',
      //   icon: 'lock-outline',
      //   children: [
      //     {
      //       title: 'Login',
      //       link: '/auth/login',
      //     },
      //     {
      //       title: 'Register',
      //       link: '/auth/register',
      //     },
      //   ],
      // },
    ];
    this.http.get<{menu: NbMenuItem}>(`${SECURED_URL}/user/menuAdmin`).subscribe((res) => {
      this.menu.push(res.menu);
    });
  }
}
