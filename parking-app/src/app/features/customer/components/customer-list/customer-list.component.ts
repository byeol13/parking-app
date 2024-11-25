import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { Customer } from '../../../../shared/models/Customer.model';
import { CustomerService } from '../../service/customer.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatButtonModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit{

  customers: Customer[] = [];
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'registration_date', 'actions'];

  constructor(private customerService: CustomerService, private datePipe: DatePipe, private router: Router){}

  ngOnInit(): void {
    this.loadAllCustomers();
  }

  loadAllCustomers() {
    this.customerService.getAllCustomers().subscribe((res) => {
      this.customers = res;
      console.log(this.customers);
    })
  }

  getFormattedDate(date: string) {
    return this.datePipe.transform(date, 'MMMM d, yyyy');
  }

  viewDetails(id: number) {
    this.router.navigate(['/customer', id]);
  }

}
