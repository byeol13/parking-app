import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CustomerService } from '../../service/customer.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Customer } from '../../../../shared/models/Customer.model';

@Component({
  selector: 'app-update-customer',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatCardModule, MatInputModule, MatDatepickerModule, RouterModule],
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.css'
})
export class UpdateCustomerComponent implements OnInit{

  editCustomerForm: FormGroup;
  customerId: any;

  constructor(private fb: FormBuilder, private router: Router, private customerService: CustomerService, private activatedRoute: ActivatedRoute) {
    this.editCustomerForm = this.fb.group({
      id: [{value: '', disabled: true}],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      billingAddress: ['', Validators.required],
      registrationDate: ['', Validators.required],
      isRegularCusto: ['', Validators.required],
      contactNumber: ['', [Validators.pattern(/^\d+$/)]]
    });
  }

  ngOnInit(): void {
    this.customerId = this.activatedRoute.snapshot.paramMap.get('customerId');

    if(this.customerId) {
      this.customerService.getCustomerById(this.customerId).subscribe((res) => {
        if (res) {
          this.editCustomerForm.patchValue({
            id: res.customerId,
            firstName: res.firstName,
            lastName: res.lastName,
            billingAddress: res.billingAddress,
            registrationDate: res.registrationDate,
            isRegularCusto: res.isRegularCusto,
            contactNumber: res.contactNumber
          });

          console.log('is regular', this.editCustomerForm);
        }
      });
    }
  }

  onSubmit() {
    if(this.editCustomerForm.valid) {
      const updatedCustomer: Customer = {
        customerId: this.customerId,
        firstName: this.editCustomerForm.get('firstName')?.value,
        lastName: this.editCustomerForm.get('lastName')?.value,
        billingAddress: this.editCustomerForm.get('billingAddress')?.value,
        registrationDate: this.editCustomerForm.get('registrationDate')?.value,
        isRegularCusto: this.editCustomerForm.get('isRegularCusto')?.value,
        contactNumber: this.editCustomerForm.get('contactNumber')?.value
      };

      this.customerService.updateCustomer(updatedCustomer).subscribe(() => {
        this.router.navigate(['/dashboard/customer']);
      });
    }
  }
}
