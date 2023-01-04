import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observer, retry } from 'rxjs';
import { RequestService } from '../service/request.service';
import { ModelService } from '../service/model.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-section-comp',
  templateUrl: './section-comp.component.html',
  styleUrls: ['./section-comp.component.scss'],
})
export class SectionCompComponent implements OnInit, AfterViewInit {
  moviesHorreur: ModelService[] = [];
  moviesAnimé: ModelService[] = [];
  moviesComedy: ModelService[] = [];
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
  favorisListeArray: ModelService[] = [];
  youtubeUrl!: string;

  video(id: number) {
    this.requete
      .getDataByID(id)
      .pipe(retry(3))
      .subscribe((data) => {
        let video = data.results[0];
        console.log(video);
        this.youtubeUrl = `https://www.youtube.com/watch?v=${video.key}`;
        window.open(this.youtubeUrl, '_blank');
      });
  }
  constructor(private requete: RequestService, private model: ModelService) {}
  ngAfterViewInit(): void {}

  ngOnInit() {
    this.requete
      .getBestFilmcombined()
      .pipe(retry(3))
      .subscribe(
        (data) => {
          let h2 = document.querySelector('.H');
          h2!.appendChild(document.createTextNode('Top Horreur '));
          h2!.classList.add('glow');
          // horror---------------------------- //
          for (let movieData of data[0].results) {
            let movie = new ModelService();
            if (movieData.poster_path) {
              movie.id = movieData.id;
              movie.title = movieData.title;
              movie.image = `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`;
              movie.recommendation = movieData.vote_average;
              movie.overview = movieData.overview;
              movie.date = movieData.release_date;
              movie.genre = movieData.genre;
              this.moviesHorreur.push(movie);
            }
          }
          //  ----------------------------------- //

          let H3 = document.querySelector('.C');
          H3!.appendChild(document.createTextNode('Top Comedie '));
          H3!.classList.add('glows');
          for (let movieData of data[1].results) {
            let movie = new ModelService();
            if (movieData.poster_path) {
              movie.id = movieData.id;
              movie.title = movieData.title;
              movie.image = `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`;
              movie.recommendation = movieData.vote_average;
              movie.overview = movieData.overview;
              movie.date = movieData.release_date;
              movie.genre = movieData.genre;
              this.moviesComedy.push(movie);
              // console.log(movieData);
            }
          }
        },
        (error) => {
          console.error(error);
        },
        () => {
          console.log('Film Chargé');
        }
      );
  }

  showCardDetails(card: ModelService) {
    this.card = card;
    console.log(card);
    // this.video(card.id);
  }

  addToFavorites(card: ModelService) {
    // Ajoutez votre logique ici pour ajouter l'élément à votre tableau de favoris
    this.favorisListeArray.push(card);

    console.log(this.favorisListeArray);
  }
}
