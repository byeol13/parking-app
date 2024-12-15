import { ParkingOneTimeRes } from './../../../shared/models/ParkingOneTimeRes.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParkingOneTimeResService {

  private apiUrl = `http://localhost:8080/parkingOneTimeReservations`;

  constructor(private http: HttpClient) { }

  getAllOneTimeRes(): Observable<ParkingOneTimeRes[]> {
    return this.http.get<ParkingOneTimeRes[]>(`${this.apiUrl}/getAllOneTimeReservations`);
  }

  getOneTimeResById(id: number): Observable<ParkingOneTimeRes> {
    return this.http.get<ParkingOneTimeRes>(`${this.apiUrl}/getOneTimeReservationById?oneTimeReservationId=${id}`);
  }

  deleteOneTimeResById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteOneTimeReservation/${id}`);
  }
}
