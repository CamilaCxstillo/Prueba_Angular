import { MovieService } from './../../service/movie.service';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, RouterLink],
  templateUrl: './search.component.html',

})
export class SearchComponent {


  query = signal('');


  constructor(public svc: MovieService) { }


  search() {
    if (!this.query()) return;
    this.svc.searchMovies(this.query());
  }
}
