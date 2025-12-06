import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../interfaces/movie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mh-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html'
})
export class MovieCardComponent {
  @Input() movie!: Movie;
  @Output() select = new EventEmitter<string>();

  onClick() {
    this.select.emit(this.movie.imdbID);
  }
}
