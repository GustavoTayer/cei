import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Notícias',
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
    title: 'Solicitação de produto',
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
