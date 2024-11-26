import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PricingException } from '../../../shared/models/PricingException.model';

@Injectable({
  providedIn: 'root'
})
export class PrincingExceptionService {

  private apiUrl = `http://localhost:3000/pricing_exception`;

  constructor(private http: HttpClient) { }

  getAllPricingExceptions(): Observable<PricingException[]> {
    return this.http.get<PricingException[]>(this.apiUrl);
  }

}
