import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Episode } from '../../model/episode';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  baseUrl = `${environment.baseUrl}/episode`

  constructor(private http: HttpClient) { }

  all(){
    return this.http.get<Episode[]>(this.baseUrl);
  }

}
