import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observer, retry } from 'rxjs';
import { RequestService } from '../service/request.service';
import { ModelService } from '../service/model.service';

@Component({
  selector: 'app-section-comp',
  templateUrl: './section-comp.component.html',
  styleUrls: ['./section-comp.component.scss'],
})
export class SectionCompComponent implements OnInit, AfterViewInit {
  moviesHorreur: ModelService[] = [];
  moviesAnimé: ModelService[] = [];
  titles: string[] = [];
  images: string[] = [];
  data!: Object;
  title!: string;
  img!: string;
  recommendations!: string;
  overview!: string;
  cast!: string;
  genre: any;
  date: any;
  movieId = Math.round(Math.random() * 1000) + 1;

  card!: ModelService;

  constructor(private requete: RequestService, private model: ModelService) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.requete
      .getBestFilm(27)
      .pipe(retry(3))
      .subscribe(
        (data) => {
          let h2 = document.querySelector('.ut');
          h2!.appendChild(document.createTextNode('Top Horreur '));
          h2!.classList.add('glow');
          for (let movieData of data.results) {
            let movie = new ModelService();
            if (movieData.poster_path) {
              movie.id = movieData.id;
              movie.title = movieData.title;
              movie.image = `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`;
              movie.recommendation = movieData.vote_average;
              movie.overview = movieData.overview;
              movie.date = movieData.release_date;
              movie.genre = movieData.genre;
              console.log(movieData);

              this.moviesHorreur.push(movie);
            }
          }
        },
        (error) => {
          console.error(error);
        },
        () => {
          console.log('Observable completed');
        }
      );
  }
  showCardDetails(card: ModelService) {
    this.card = card;
    console.log(card);
  }
}
