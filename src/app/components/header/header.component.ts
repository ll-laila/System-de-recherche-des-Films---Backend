import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Film } from 'src/app/models/film';
import { FilmService } from 'src/app/services/film/film.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent  {
 /* @Output() offsetMenuEvent: EventEmitter<boolean> = new EventEmitter();
  offsetMenu = false;
implements OnInit
  enteredSearchValue: string = '';
  showSuggested: boolean = false;
  showResults: boolean = false;
  suggestedFilms: Film[] = [];

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
  }

  onMenu(val: boolean) {
    this.offsetMenuEvent.emit(val);
    this.offsetMenu = !this.offsetMenu;
  }

  closeSearch() {
    this.showResults = false;
    this.enteredSearchValue = '';
    this.suggestedFilms = [];
  }

  outSearch() {
    setTimeout(() => {
      this.closeSearch();
    }, 200)
  }

  onSearchChange() {
    if (this.enteredSearchValue !== '') {
      this.showResults = true;

      this.filmService.searchMovies(this.enteredSearchValue).subscribe(data => {
        this.suggestedFilms = data;

        if (this.suggestedFilms.length > 0) {
          this.showSuggested = true;
        } else {
          this.suggestedFilms = [];
          this.showSuggested = false;
        }
      })
    } else {
      this.showResults = false;
      this.suggestedFilms = [];
    }
  }*/
}
