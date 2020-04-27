import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators'; //filtrador de agua para no poner data.artist.album etc

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log('SpotifyService listo');

   }
  
   getQuery(query:string){
        const url = `https://api.spotify.com/v1/${query}`;

        const headers= new HttpHeaders({
          'Authorization':'Bearer BQAhUqfKPM_CP14DJAwqH4L32gSc2VmL2u7R5-XN0d8qCi2nxoVzJloybI3qF3c2NhGloj-XOebJhTUGgXs'
        });
       return this.http.get(url,{headers});
      }




   getNewReleases(){
          return this.getQuery('browse/new-releases?limit=20')
                      .pipe(map(data =>data['albums'].items));
             /*         

           return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20',{headers}).pipe(map(data =>{
                    return data['albums'].items;
           }));*/
    }


    getArtistas(termino:string){
              return this.getQuery(`search?q=${termino}n&type=artist&limit=20`)
                          .pipe(map(data => data['artists'].items ));

    }

    getArtista(id:string){
              return this.getQuery(`artists/${id}`);
             // .pipe(map(data => data['artists'].items ));
    }
    getTopTracks(id:string){
              return this.getQuery(`artists/${id}/top-tracks?country=us`)
              .pipe(map(data => data['tracks']));
    }
}