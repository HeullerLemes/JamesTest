import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Establishment } from '../models/Establishment';
import { Observable } from 'rxjs';
import { URLs } from '../util/URLs';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentsService {

  constructor(private http: HttpClient) { }

  getEstablishiments(): Observable<HttpResponse<Establishment[]>>{
    return this.http.get<Establishment[]>(URLs.ListEstablishments, {observe: 'response'});
  }

  getEstablishiment(id: string): Observable<HttpResponse<Establishment>>{
    return this.http.get<Establishment>(URLs.ListEstablishments+"/"+id, {observe: 'response'})
  }


}
