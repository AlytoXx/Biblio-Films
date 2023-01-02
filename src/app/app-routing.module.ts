import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmComponent } from './film/film.component';
import { MalisteComponent } from './maliste/maliste.component';
import { SectionCompComponent } from './section-comp/section-comp.component';

const routes: Routes = [
  { path: 'Film', component: SectionCompComponent },
  // { path: 'Film', component: FilmComponent },
  { path: 'Maliste', component: MalisteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
