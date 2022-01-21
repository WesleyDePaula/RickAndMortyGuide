import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Episode } from '../../model/episode';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  baseUrl = `${environment.baseUrl}/episode`

  constructor(private http: HttpClient) { }

  all(queryParams?: { query?: string }): Observable<Episode[]> {
    let params = {}

    if (queryParams) {
      const { query } = queryParams
      params = query ? { name: query } : {}
    }

    return this.http.get<Episode[]>(this.baseUrl, { params });

  }

  getOne(id: number) {
    return this.http.get<Episode>(`${this.baseUrl}/${id}`)
  }

  getMultiple(ids: number[]) {
    return this.http.get<Episode[]>(`${this.baseUrl}/${ids}`)
  }

}
