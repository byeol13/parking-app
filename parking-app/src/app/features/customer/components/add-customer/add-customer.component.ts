import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { CustomerService } from '../../service/customer.service';
import { AddCustomerDialogComponent } from '../add-customer-dialog/add-customer-dialog.component';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatCardModule, MatInputModule, MatDatepickerModule],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {

  addCustomerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private dialog: MatDialog, private customerService: CustomerService) {
    this.addCustomerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      billingAddress: ['', Validators.required],
      registrationDate: ['', Validators.required],
      isRegularCustomer: ['', Validators.required],
      contactNumber: ['', [Validators.pattern(/^\d+$/)]]
    });
  }

  openConfirmationDialog() {
    if(this.addCustomerForm.valid) {
      const addDialog = this.dialog.open(AddCustomerDialogComponent, {
        width: '500px', height: '250px'
      });

      addDialog.afterClosed().subscribe((res) => {
        if (res === 'confirm') {
          this.saveCustomer();
        }
      })
    }
  }

  saveCustomer() {
    this.customerService.addCustomer(this.addCustomerForm.value).subscribe(() => {
      this.router.navigate(['/dashboard/customer']);
    })
  }

  goBack() {
    this.router.navigate(['/dashboard/customer']);
  }
}
