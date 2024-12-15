import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParkingPricing } from '../../../shared/models/ParkingPricing.model';

@Injectable({
  providedIn: 'root'
})
export class ParkingPricingService {

  private apiUrl = `http://localhost:8080/parkingPricing`;

  constructor(private http: HttpClient) { }

  getAllParkingPricings(): Observable<ParkingPricing[]> {
    return this.http.get<ParkingPricing[]>(`${this.apiUrl}/getAllParkingPricing`);
  }

  getParkingPricingById(id: number): Observable<ParkingPricing> {
    return this.http.get<ParkingPricing>(`${this.apiUrl}/getParkingPricingById?parkingPricingId=${id}`);
  }

  deleteParkingPricingById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteParkingPricing/${id}`);
  }
}
