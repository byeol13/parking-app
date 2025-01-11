import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-add-payment-method',
  standalone: true,
  imports: [MatTableModule, MatCardModule, CommonModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatOptionModule, MatSelectModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './add-payment-method.component.html',
  styleUrl: './add-payment-method.component.css'
})
export class AddPaymentMethodComponent {

  addPaymentMethodForm: FormGroup;

  constructor(private fb: FormBuilder, 
    public dialogRef: MatDialogRef<AddPaymentMethodComponent>
  ){
    this.addPaymentMethodForm = this.fb.group({
      cardType: ['', [Validators.required]], 
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      expiryMonth: ['', [Validators.required, Validators.min(1), Validators.max(12)]],  
      expiryYear: ['', [Validators.required, Validators.min(2025)]],  
      securityCode: ['', [Validators.required, Validators.pattern('^[0-9]{3,4}$')]]
    });
  }

  onSubmit() {
    if (this.addPaymentMethodForm.valid) {
      this.dialogRef.close(this.addPaymentMethodForm.value);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }

}
