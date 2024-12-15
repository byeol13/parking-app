import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParkingMonthlyPass } from '../../../shared/models/ParkingMonthlyPass.model';

@Injectable({
  providedIn: 'root'
})
export class ParkingMonthlyPassService {

  private apiUrl = `http://localhost:8080/parkingMonthlyPass`;

  constructor(private http: HttpClient) { }

  getAllParkingMonthlyPasses(): Observable<ParkingMonthlyPass[]> {
    return this.http.get<ParkingMonthlyPass[]>(`${this.apiUrl}/getAllMonthlyPasses`);
  }

  getParkingMonthlyPassById(id: number): Observable<ParkingMonthlyPass> {
    return this.http.get<ParkingMonthlyPass>(`${this.apiUrl}/getMonthlyPassById?monthlyPassId=${id}`);
  }

  deleteParkingMonthlyPassById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteMonthlyPass/${id}`);
  }
}
