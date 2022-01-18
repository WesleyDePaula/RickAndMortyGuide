import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Character } from '../model/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private baseUrl = `${environment.baseUrl}/character`;

  constructor(private http: HttpClient) { }

  all(){
    return this.http.get<Character[]>(this.baseUrl)
  }

}
