import { ParkingOneTimeRes } from './../../../shared/models/ParkingOneTimeRes.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParkingOneTimeResService {

  private apiUrl = `http://localhost:3000/parking_one_time_reservation`;

  constructor(private http: HttpClient) { }

  getAllOneTimeRes(): Observable<ParkingOneTimeRes[]> {
    return this.http.get<ParkingOneTimeRes[]>(this.apiUrl);
  }

  getOneTimeResById(id: number): Observable<ParkingOneTimeRes> {
    return this.http.get<ParkingOneTimeRes>(`${this.apiUrl}/${id}`);
  }
}
