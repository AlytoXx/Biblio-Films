import { Component } from '@angular/core';
import { retry } from 'rxjs';
import { RequestService } from '../service/request.service';

@Component({
  selector: 'app-maliste',
  templateUrl: './maliste.component.html',
  styleUrls: ['./maliste.component.scss'],
})
export class MalisteComponent {
  service!: RequestService;
  constructor(service: RequestService) {}

  ngOnInit() {
    this.service
      .getBestFilm(536554)
      .pipe(retry(3))
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.error(error);
        },
        () => {
          console.log('Film Chargé');
        }
      );
  }
}
