import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'film-list',
    loadChildren: () => import('./pages/list-films/list-films.module').then((m) => m.ListFilmPageModule),
  },

  {
    path: 'Films/:id',
    loadChildren: () => import('./pages/films/films.module').then((m) => m.FilmsModule),
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
