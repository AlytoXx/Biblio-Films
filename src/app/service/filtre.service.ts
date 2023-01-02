import { Injectable } from '@angular/core';
import { concatMap, Observable, startWith, Subject, switchMap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ModelService } from './model.service';
@Injectable({
  providedIn: 'root',
})
export class FiltreService {
  http!: HttpClient;
}
