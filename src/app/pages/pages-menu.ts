import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
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
  {
    title: 'Admin',
    icon: 'lock-outline',
    children: [
      {
        title: 'Produtos',
        icon: 'cube-outline',
        link: '/pages/admin/produto',
      },
      {
        title: 'Solicitações',
        icon: 'list-outline',
        link: '/pages/admin/solicitacoes',
      },
      {
        title: 'Usuários',
        icon: 'person-outline',
        link: '/pages/admin/usuarios',
      },
    ],
  },
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
