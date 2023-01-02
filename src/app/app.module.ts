import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderCompComponent } from './header-comp/header-comp.component';
import { SectionCompComponent } from './section-comp/section-comp.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FilmComponent } from './film/film.component';
import { MalisteComponent } from './maliste/maliste.component';
import { HttpClientModule } from '@angular/common/http';
import { CarousselComponent } from './caroussel/caroussel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderCompComponent,
    SectionCompComponent,
    FilmComponent,
    MalisteComponent,
    CarousselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
