import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from 'src/app/models/film';
import { FilmService } from 'src/app/services/film/film.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html'
})
export class FilmsComponent implements OnInit {
  film: Film | undefined;
  showLoader: boolean = true;


  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.film = {
        fileName: '',
        title: '',
        year: 0,
        cast: 0,
        genres: '',
        video: '',
        extract: '',
      };


    this.showLoader = false;


    let fileName = this.route.snapshot.params['id'];

      this.showLoader = true;
      this.filmService.getMovie(fileName).subscribe(data => {
        this.film = data;
        this.showLoader = false;
        console.log(this.film);
      });
  }


  // Méthode pour transformer l'URL YouTube en URL sécurisée pour l'iframe
  getVideoUrl(videoUrl: string): SafeUrl {
    const videoId = this.extractVideoId(videoUrl);
    const youtubeUrl = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(youtubeUrl);
  }

  // Extraire l'ID de la vidéo YouTube depuis l'URL
  private extractVideoId(url: string): string {
    const regex = /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/]+\/.*\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|https?:\/\/(?:www\.)?youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match && match[1] ? match[1] : '';
  }
}
