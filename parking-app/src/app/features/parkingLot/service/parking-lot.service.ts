import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParkingLot } from '../../../shared/models/ParkingLot.model';

@Injectable({
  providedIn: 'root'
})  
export class ParkingLotService {

  private apiUrl = `http://localhost:8080/parking-lot`;

  constructor(private http: HttpClient) { }

  getAllParkingLots(): Observable<ParkingLot[]> {
    return this.http.get<ParkingLot[]>(`${this.apiUrl}/getAllParkingLots`);
  }

  getParkingLotById(id: number): Observable<ParkingLot> {
    return this.http.get<ParkingLot>(`${this.apiUrl}/getParkingLotById?parkingLotId=${id}`);
  }

  deleteParkingLotById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteParkingLot/${id}`);
  }

  addParkingLot(parkingLot: ParkingLot): Observable<ParkingLot> {
    return this.http.post<ParkingLot>(`${this.apiUrl}/newParkingLot`, parkingLot);
  }

  updateParkingLot(parkingLot: ParkingLot): Observable<ParkingLot> {
    return this.http.put<ParkingLot>(`${this.apiUrl}/updateParkingLot`, parkingLot);
  }
}
