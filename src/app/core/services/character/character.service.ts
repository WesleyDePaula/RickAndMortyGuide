import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character } from 'src/app/core/model/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private _character = new Subject<Character>();

  private baseUrl = `${environment.baseUrl}/character`;

  constructor(private http: HttpClient) { }

  all(queryParams?: { query?: string }): Observable<Character[]> {
    let params = {};

    if (queryParams) {
      const { query } = queryParams
      params = query ? { name: query } : {}
    }

    return this.http.get<Character[]>(this.baseUrl, { params })
  }

  getOne(id: number) {
    return this.http.get<Character>(`${this.baseUrl}/${id}`)
  }

}
