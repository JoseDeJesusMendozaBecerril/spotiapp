import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ],
})
export class SearchComponent {
  artistas:any[]=[];

  constructor(private spotify:SpotifyService) { }


  buscar(buscar:string){
    console.log(buscar);
    this.spotify.getArtistas(buscar).subscribe(data => {
        console.log(data);
        this.artistas = data;//solo con data porque filtre info peticion http
    });
  }

}
