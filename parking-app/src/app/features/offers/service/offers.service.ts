import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offer } from '../../../shared/models/Offer.model';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  private apiUrl = `http://localhost:8080/offers`;

  constructor(private http: HttpClient) { }

  getAllOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(`${this.apiUrl}/getAllOffers`);
  }

  getOfferById(id: number): Observable<Offer> {
    return this.http.get<Offer>(`${this.apiUrl}/getOfferById?offerId=${id}`);
  }

  deleteOfferById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteOffer/${id}`);
  }

  addOffer(offer: Offer): Observable<Offer> {
    return this.http.post<Offer>(`${this.apiUrl}/newOffer`, offer);
  }

  updateOffer(offer: Offer): Observable<Offer> {
    return this.http.put<Offer>(`${this.apiUrl}/updateOffer`, offer);
  }
}
