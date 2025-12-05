import { MovieService } from './../../service/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './movie-detail.component.html',
})
export class DetailsComponent implements OnInit {
  movie: any = null;


  constructor(private route: ActivatedRoute, private svc: MovieService) { }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) this.svc.getMovieById(id).subscribe(m => this.movie = m);
  }
}
