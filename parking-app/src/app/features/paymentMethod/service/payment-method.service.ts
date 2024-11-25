import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentMethod } from '../../../shared/models/PaymentMethod.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {

  private apiUrl = `http://localhost:3000/payment_method`;

  constructor(private http: HttpClient) { }

  getAllPaymentMethods(): Observable<PaymentMethod[]> {
    return this.http.get<PaymentMethod[]>(this.apiUrl);
  }
}
