import { Component, OnInit, ViewChild } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { Customer } from '../../../../shared/models/Customer.model';
import { CustomerService } from '../../service/customer.service';
import { CommonModule, DatePipe } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CustomerDeleteComponent } from '../customer-delete/customer-delete.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatButtonModule, CommonModule, CustomerDeleteComponent, RouterModule, MatPaginatorModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit{

  customerIdToDelete: number | undefined;
  customers: Customer[] = [];
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'registration_date', 'manage', 'actions'];
  showDeleteDialog = false;

  totalCustomers: number = 0;
  displayedCustomers: Customer[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private customerService: CustomerService, private datePipe: DatePipe, private router: Router){}

  ngOnInit(): void {
    this.loadAllCustomers();
  }

  loadAllCustomers() {
    this.customerService.getAllCustomers().subscribe((res) => {
      this.customers = res;
      this.totalCustomers = this.customers.length;
      this.paginatedCustomers();
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

  paginatedCustomers() {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    this.displayedCustomers = this.customers.slice(startIndex, startIndex + this.paginator.pageSize);
  }

}
