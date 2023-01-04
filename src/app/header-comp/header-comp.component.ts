import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FiltreService } from '../service/filtre.service';

@Component({
  selector: 'app-header-comp',
  templateUrl: './header-comp.component.html',
  styleUrls: ['./header-comp.component.scss'],
})
export class HeaderCompComponent implements OnInit {
  inputValue!: string;
  constructor(
    private router: Router,
    private http: HttpClient,
    private filtre: FiltreService
  ) {}

  accueil() {
    this.router.navigateByUrl('Film');
  }
  ngOnInit(): void {
    this.inputValue = 'Nouvelle valeur';
    console.log(this.inputValue);
  }
}
