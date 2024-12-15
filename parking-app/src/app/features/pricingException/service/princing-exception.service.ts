import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PricingException } from '../../../shared/models/PricingException.model';

@Injectable({
  providedIn: 'root'
})
export class PrincingExceptionService {

  private apiUrl = `http://localhost:8080/pricingException`;

  constructor(private http: HttpClient) { }

  getAllPricingExceptions(): Observable<PricingException[]> {
    return this.http.get<PricingException[]>(`${this.apiUrl}/getAllPricingExceptions`);
  }

  getPricingExceptionById(id: number): Observable<PricingException> {
    return this.http.get<PricingException>(`${this.apiUrl}/getPricingExceptionById?pricingExceptionId=${id}`);
  }

  deletePricingExceptionById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deletePricingException/${id}`);
  }

}
