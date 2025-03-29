import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: '',
  //   loadComponent: () =>
  //     import('./components/timer/timer.component').then((c) => c.TimerComponent),
  // },
  {
    path: '',
    loadComponent: () =>
      import('./components/table/table.component').then((c) => c.TableComponent),
  }
];
