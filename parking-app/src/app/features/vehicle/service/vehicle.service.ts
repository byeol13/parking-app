import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from '../../../shared/models/Vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private apiUrl = `http://localhost:8080/vehicles`;

  constructor(private http: HttpClient) { }

  getAllVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.apiUrl}/getAllVehicles`);
  }

  getVehicleById(id: number): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${this.apiUrl}/getVehicleById?vehicleId=${id}`);
  }

  deleteVehicleById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteVehicle/${id}`);
  }
}
