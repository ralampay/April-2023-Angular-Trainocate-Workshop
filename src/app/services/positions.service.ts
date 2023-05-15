import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Position } from '../interfaces/position';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PositionsService {

  private apiUrl = "http://localhost:3000/positions";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Position[]> {
    return this.http.get<Position[]>(this.apiUrl);
  }
}
