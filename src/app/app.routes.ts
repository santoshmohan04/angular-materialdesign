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
      import('./components/todo/todo.component').then((c) => c.TodoComponent),
  }
];
