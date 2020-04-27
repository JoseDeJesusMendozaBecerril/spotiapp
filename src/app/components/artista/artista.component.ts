import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'; //aqui recibo, para saber cual es la ruta
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ],
})
export class ArtistaComponent {

          artista:any={};
          loadingArtist:boolean;
          topTracks: any[] = [];


          constructor(private router:ActivatedRoute,
                      private spotify:SpotifyService) { 
                             
                            this.loadingArtist=true;
                             
                            this.router.params.subscribe(params =>{
                                  console.log(params);//parametros recibidos en el URL
                                  this.getArtista(params['id']);
                                  this.getTopTacks(params['id']);  
                              });
          }

          getArtista(id:string){
                    this.loadingArtist=true;
                    this.spotify.getArtista(id).subscribe(artista =>{
                      console.log(artista);
                      this.artista = artista;
                      this.loadingArtist=false;
                    })
          }

          getTopTacks(id:string){
                    this.spotify.getTopTracks( id )
                    .subscribe( topTracks => {
                      console.log(topTracks);
                      this.topTracks = topTracks;
                    });
          }

}
