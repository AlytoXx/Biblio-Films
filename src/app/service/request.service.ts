import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { combineLatest, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(private http: HttpClient) {}

  getData(movieId: number): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzBmYjc5MmY4Mzk5YzZjNWI3ZjI4Y2Y2NzE1NmM0NiIsInN1YiI6IjYzYWNmYzZhNWFkNzZiMDBhZThmM2U1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s0rGokXFec1SyKxMm1iZMMX1AMYBkdSmFfHS6vXilFA'
    );
    const API_KEY = '8c0fb792f8399c6c5b7f28cf67156c46';
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`,
      { headers }
    );
  }

  getBestFilm(genreId: number): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzBmYjc5MmY4Mzk5YzZjNWI3ZjI4Y2Y2NzE1NmM0NiIsInN1YiI6IjYzYWNmYzZhNWFkNzZiMDBhZThmM2U1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s0rGokXFec1SyKxMm1iZMMX1AMYBkdSmFfHS6vXilFA'
    );
    const API_KEY = '8c0fb792f8399c6c5b7f28cf67156c46';
    // const genreId = 27;
    const sortBy = 'popularity.desc'; // Trier par note de l'audience
    const page = 1; // Première page de résultats

    return this.http.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&sort_by=${sortBy}&include_video:true&vote_average.gte=7`,

      { headers }
    );
  }

  getBestFilmcombined(): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzBmYjc5MmY4Mzk5YzZjNWI3ZjI4Y2Y2NzE1NmM0NiIsInN1YiI6IjYzYWNmYzZhNWFkNzZiMDBhZThmM2U1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s0rGokXFec1SyKxMm1iZMMX1AMYBkdSmFfHS6vXilFA'
    );
    const API_KEY = '8c0fb792f8399c6c5b7f28cf67156c46';
    const genreIdHorror = 27; // ID du genre "horreur" dans TMDb
    const genreIdComedy = 35; // ID du genre "comédie" dans TMDb
    const genreIdAnimation = 16; // ID du genre "animation" dans TMDb
    const sortBy = 'popularity.desc'; // Trier par note de l'audience

    const urlHorror = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreIdHorror}&sort_by=${sortBy}&include_video:true&vote_average.gte=7`;
    const urlComedy = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreIdComedy}&sort_by=${sortBy}&include_video:true&vote_average.gte=7`;
    const urlAnimation = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreIdComedy}&sort_by=${sortBy}&include_video:true&vote_average.gte=7`;

    const horrorObservable = this.http.get(urlHorror, { headers });
    const comedyObservable = this.http.get(urlComedy, { headers });
    const animationObservable = this.http.get(urlAnimation, { headers });

    return combineLatest(
      horrorObservable,
      comedyObservable,
      animationObservable
    ).pipe(
      map(([horror, comedy, animation]) => {
        // Fusionnez les films dans un seul tableau
        return [...horror.results, ...comedy.results, ...animation.results];
      })
    );
  }
}
