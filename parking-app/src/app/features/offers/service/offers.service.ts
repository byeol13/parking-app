import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offer } from '../../../shared/models/Offer.model';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  private apiUrl = `http://localhost:3000/offers`;

  constructor(private http: HttpClient) { }

  getAllOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.apiUrl);
  }
}
