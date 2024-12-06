import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FilmService } from 'src/app/services/film/film.service';
import { Film } from 'src/app/models/film';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent {
  searchValue: String = '';
  hidden: boolean = true;

  //Header
  offsetMenu = false;
  enteredSearchValue: string = '';
  showSuggested: boolean = false;
  showResults: boolean = false;
  suggestedFilms: Film[] = [];

  constructor(
    private router: Router,private filmService: FilmService
  ) { }


  mostSearched() {
    this.router.navigate(['/film-list']);
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
  }


  getThumbnailVideo(videoUrl: string): any {
    const videoId = this.extractVideoId(videoUrl);
    if (videoId) {
      return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }
    return '';
  }

  private extractVideoId(url: string): string {
    const regex = /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/]+\/.*\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|https?:\/\/(?:www\.)?youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match && match[1] ? match[1] : '';
  }
}
