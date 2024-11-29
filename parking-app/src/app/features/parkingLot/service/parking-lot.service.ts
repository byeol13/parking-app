import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParkingLot } from '../../../shared/models/ParkingLot.model';

@Injectable({
  providedIn: 'root'
})
export class ParkingLotService {

  private apiUrl = `http://localhost:3000/parking_lot`;

  constructor(private http: HttpClient) { }

  getAllParkingLots(): Observable<ParkingLot[]> {
    return this.http.get<ParkingLot[]>(this.apiUrl);
  }

  getParkingLotById(id: number): Observable<ParkingLot> {
    return this.http.get<ParkingLot>(`${this.apiUrl}/${id}`);
  }

  deleteParkingLotById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
