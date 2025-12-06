
import { MovieService } from './../../service/movie.service';
import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-history',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './history.component.html',
})
export class HistoryComponent {
  constructor(public svc: MovieService) { }


  clear() {
    this.svc.clearHistory();
  }
}
