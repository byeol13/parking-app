import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { CustomerService } from '../../service/customer.service';
import { CommonModule, DatePipe } from '@angular/common';
import { Customer } from '../../../../shared/models/Customer.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatTableModule, MatCardModule],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent implements OnInit{

  customerId: any;
  customers: Customer | undefined;
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'contact_number', 'billing_address', 'registration_date', 'is_regular_customer'];

  constructor(private customerService: CustomerService, private datePipe: DatePipe, private activatedRoute: ActivatedRoute){
    this.customerId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.loadCustomerById();
  }

  loadCustomerById() {
    if(this.customerId) {
      this.customerService.getCustomerById(this.customerId).subscribe((res) => {
        this.customers = res;
        console.log("After Service", this.customers)
      })
    }
  }

  getFormattedDate(date: string) {
    return this.datePipe.transform(date, 'MMMM d, yyyy');
  }

}
