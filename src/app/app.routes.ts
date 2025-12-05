import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component/home.component';

export const routes: Routes = [
  { path: '',
    component: HomeComponent 
  },
  {
    path: 'search',
    loadComponent: () =>
      import('./pages/search/search.component').then(m => m.SearchComponent)
  },
  {
    path: 'history',
    loadComponent: () =>
      import('./pages/history/history.component').then(m => m.HistoryComponent)
  },
  {
    path: 'movie/:id',
    loadComponent: () =>
      import('./pages/movie-detail/movie-detail.component').then(m => m.DetailsComponent)
  },

  { path: '**', 
    redirectTo: '' 
  },
];
