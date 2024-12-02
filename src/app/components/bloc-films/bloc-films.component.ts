import { Component, OnInit, Input } from '@angular/core';
import { FilmService } from 'src/app/services/film/film.service';

@Component({
  selector: 'app-bloc-films',
  templateUrl: './bloc-films.component.html'
})

export class BlocFilmsComponent implements OnInit {
  films: any;
  showLoader: boolean = true;


  constructor(private filmService:FilmService) { }

  ngOnInit(): void {
    this.showLoader = false;

    this.filmService.getAllMovies().subscribe(data=>{
        this.films = data;
        this.showLoader = false;
    })

  }
}
