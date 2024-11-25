import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PaymentMethodService } from '../../service/payment-method.service';
import { ActivatedRoute } from '@angular/router';
import { PaymentMethod } from '../../../../shared/models/PaymentMethod.model';

@Component({
  selector: 'app-payment-method-details',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatCardModule, CommonModule],
  templateUrl: './payment-method-details.component.html',
  styleUrl: './payment-method-details.component.css'
})
export class PaymentMethodDetailsComponent implements OnInit{

  paymentMethodId: any;
  paymentMethods: PaymentMethod | undefined;
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'card_type','card_number', 'expiry_month', 'expiry_year', 'security_code'];

  constructor(private paymentMethodService: PaymentMethodService, private activatedRoute: ActivatedRoute){
    this.paymentMethodId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.loadPaymentMethodById();
  }

  loadPaymentMethodById() {
    if(this.paymentMethodId) {
      this.paymentMethodService.getPaymentMethodById(this.paymentMethodId).subscribe((res) => {
        this.paymentMethods = res;
      })
    }
  }

}
