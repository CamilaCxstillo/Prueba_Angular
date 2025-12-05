import { LayoutComponent } from './layout/layout.component';
import { SearchComponent } from './pages/search/search.component';
import { HistoryComponent } from './pages/history/history.component';

export const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'search', component: SearchComponent },
      { path: 'history', component: HistoryComponent }
    ]
  },

];
