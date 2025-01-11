import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { Customer } from '../../../../shared/models/Customer.model';
import { CustomerService } from '../../service/customer.service';
import { CommonModule, DatePipe } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CustomerDeleteComponent } from '../customer-delete/customer-delete.component';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatButtonModule, CommonModule, CustomerDeleteComponent, RouterModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit{

  customerIdToDelete: number | undefined;
  customers: Customer[] = [];
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'registration_date', 'manage', 'actions'];
  showDeleteDialog = false;

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
    this.router.navigate(['/customer'], { queryParams: { customerId: id } });
  }

  openDeleteDialog(id: number) {
    this.customerIdToDelete = id;
    this.showDeleteDialog = true;
  }

  deleteCustomerById(id: number) {
    this.customerService.deleteCustomerById(id).subscribe(() => {
      this.loadAllCustomers();
      this.showDeleteDialog = false;
    })
  }

  cancelDelete() {
    this.showDeleteDialog = false;
  }

}
