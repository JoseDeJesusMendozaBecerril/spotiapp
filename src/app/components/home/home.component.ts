import { Component, OnInit } from '@angular/core';
//import {HttpClient} from '@angular/common/http';
import {SpotifyService} from '../../services/spotify.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ],
})
export class HomeComponent implements OnInit {
  
  //paises:any[]=[];
  nuevasCanciones:any[]=[];
  loading:boolean;
  error: boolean;
  mensajeError:string;

  constructor(/*private http: HttpClient*/ private spotify:SpotifyService) {
    /*console.log('Constructor del home hecho');
    this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe( (resp:any) => {
          console.log(resp);
          this.paises = resp; 
    });
    */
   this.loading=true;
   this.spotify.getNewReleases()
   .subscribe((data:any) =>{
      console.log(data);
      this.nuevasCanciones = data;
      this.loading = false;
      this.error=false;
   }, (errorServicio) =>{
         this.loading =false;
         this.error = true;
         this.mensajeError = errorServicio.error.error.message;
       });
   }

  ngOnInit(): void {
  }

}
