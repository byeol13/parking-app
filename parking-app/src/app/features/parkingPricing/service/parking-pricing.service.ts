import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParkingPricing } from '../../../shared/models/ParkingPricing.model';

@Injectable({
  providedIn: 'root'
})
export class ParkingPricingService {

  private apiUrl = `http://localhost:3000/parking_pricing`;

  constructor(private http: HttpClient) { }

  getAllParkingPricings(): Observable<ParkingPricing[]> {
    return this.http.get<ParkingPricing[]>(this.apiUrl);
  }

  getParkingPricingById(id: number): Observable<ParkingPricing> {
    return this.http.get<ParkingPricing>(`${this.apiUrl}/${id}`);
  }
}
