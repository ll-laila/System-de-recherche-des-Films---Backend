import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from 'src/app/models/film';


@Injectable({
  providedIn: 'root'
})

export class FilmService {

  private baseUrl: string = 'http://localhost:8088';

  constructor(private http: HttpClient) { }

  // Rechercher des films par un terme de recherche
  searchMovies(query: string): Observable<Film[]> {
    const params = new HttpParams().set('query', query);
    return this.http.get<Film[]>(`${this.baseUrl}/search`, { params });
  }

  // Obtenir tous les films
  getAllMovies(): Observable<Film[]> {
    return this.http.get<Film[]>(`${this.baseUrl}/movies`);
  }

  // Obtenir un film par son nom de fichier
  getMovie(fileName: string): Observable<Film> {
    return this.http.get<Film>(`${this.baseUrl}/movie/${fileName}`);
  }


}
