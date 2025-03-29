import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/intro/intro-view.component').then(
            (m) => m.IntroViewComponent
          ),
        title: 'Introdução Ferengi',
      },
      {
        path: 'jogo',
        loadComponent: () =>
          import(
            './features/ferengi-rules/views/game-view/game-view.component'
          ).then((m) => m.GameViewComponent),
        title: 'Ferengi Quiz',
      },
      {
        path: 'regras',
        loadComponent: () =>
          import(
            './features/ferengi-rules/views/rule-list/rule-list.component'
          ).then((m) => m.RuleListComponent),
        title: 'Leis de Aquisição',
      },
    ],
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];
