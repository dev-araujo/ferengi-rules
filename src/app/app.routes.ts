import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        './features/ferengi-rules/views/rule-list/rule-list.component'
      ).then((m) => m.RuleListComponent),
  },
  {
    path: 'jogo',
    loadComponent: () =>
      import(
        './features/ferengi-rules/views/game-view/game-view.component'
      ).then((m) => m.GameViewComponent),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
