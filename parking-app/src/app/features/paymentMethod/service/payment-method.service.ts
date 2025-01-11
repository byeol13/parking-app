import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentMethod } from '../../../shared/models/PaymentMethod.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {

  private apiUrl = `http://localhost:8080/paymentMethod`;

  constructor(private http: HttpClient) { }

  getAllPaymentMethods(): Observable<PaymentMethod[]> {
    return this.http.get<PaymentMethod[]>(`${this.apiUrl}/getAllPaymentMethods`);
  }

  getPaymentMethodById(id: number): Observable<PaymentMethod> {
    return this.http.get<PaymentMethod>(`${this.apiUrl}/getPaymentMethodById?paymentMethodId=${id}`);
  }

  deletePaymentMethodById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deletePaymentMethod/${id}`);
  }

  addPaymentMethod(paymentMethod: PaymentMethod): Observable<PaymentMethod> {
    return this.http.post<PaymentMethod>(`${this.apiUrl}/newPaymentMethod`, paymentMethod);
  }

  updatePaymentMethod(paymentMethod: PaymentMethod): Observable<PaymentMethod> {
    return this.http.put<PaymentMethod>(`${this.apiUrl}/updatePaymentMethod`, paymentMethod);
  }
}
