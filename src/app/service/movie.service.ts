import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';
import { Movie } from '../interfaces/movie';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private apiUrl = 'https://www.omdbapi.com/?apikey=5403eafe';

  movies = signal<Movie[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);
  history = signal<string[]>([]);

  constructor(private http: HttpClient, private storage: StorageService) {
    const saved = this.storage.get<string[]>('history');
    if (saved) {
      this.history.set(saved);
    }
  }

  searchMovies(term: string, page = 1) {
    if (!term?.trim()) return;
    this.loading.set(true);
    this.error.set(null);

    this.http.get<any>(`${this.apiUrl}&s=${encodeURIComponent(term)}&page=${page}`).subscribe({
      next: (res) => {
        if (res?.Response === 'True') {
          // OMDb devuelve res.Search con la lista
          this.movies.set(res.Search || []);
          this.addToHistory(term);
        } else {
          this.movies.set([]);
          this.error.set(res?.Error || 'No se encontraron resultados.');
        }
        this.loading.set(false);
      },
      error: (err) => {
        console.error('HTTP Error', err);
        this.error.set('Error al obtener películas. Reintente.');
        this.loading.set(false);
      }
    });
  }

  getMovieById(id: string): Observable<any> {
    // Devuelve el observable para que el componente pueda suscribirse y obtener el detalle
    return this.http.get<any>(`${this.apiUrl}&i=${id}&plot=full`);
  }

  addToHistory(term: string) {
    const list = this.history();
    if (!list.includes(term)) {
      const updated = [term, ...list].slice(0, 10);
      this.history.set(updated);
      this.storage.set('history', updated);
    }
  }

  clearHistory() {
    this.history.set([]);
    this.storage.set('history', []);
  }
}
