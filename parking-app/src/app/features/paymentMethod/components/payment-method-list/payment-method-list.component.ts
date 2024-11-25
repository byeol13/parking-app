import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PaymentMethodService } from '../../service/payment-method.service';
import { PaymentMethod } from '../../../../shared/models/PaymentMethod.model';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-payment-method-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatButtonModule],
  templateUrl: './payment-method-list.component.html',
  styleUrl: './payment-method-list.component.css'
})
export class PaymentMethodListComponent implements OnInit{

  paymentMethods: PaymentMethod[] = [];
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'card_type','card_number', 'actions'];

  constructor(private paymentMethodService: PaymentMethodService, private router: Router){}

  ngOnInit(): void {
    this.loadAllPaymentMethods();
  }

  loadAllPaymentMethods() {
    this.paymentMethodService.getAllPaymentMethods().subscribe((res) => {
      this.paymentMethods = res;
    })
  }

  viewDetails(id: number) {
    this.router.navigate([`/paymentMethod`, id]);
  }

}
