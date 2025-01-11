import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PaymentMethodService } from '../../service/payment-method.service';

@Component({
  selector: 'app-update-payment-method',
  standalone: true,
  imports: [MatTableModule, MatCardModule, CommonModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatOptionModule, MatSelectModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './update-payment-method.component.html',
  styleUrl: './update-payment-method.component.css'
})
export class UpdatePaymentMethodComponent implements OnInit{

  editPaymentMethodForm: FormGroup;

  constructor(private fb: FormBuilder, 
    public dialogRef: MatDialogRef<UpdatePaymentMethodComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {paymentMethodId: number}, private paymentMethodService: PaymentMethodService
  ){
    this.editPaymentMethodForm = this.fb.group({
      id: [{value: '', disabled: true}],
      cardType: ['', [Validators.required]], 
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      expiryMonth: ['', [Validators.required, Validators.min(1), Validators.max(12)]],  
      expiryYear: ['', [Validators.required, Validators.min(2025)]],  
      securityCode: ['', [Validators.required, Validators.pattern('^[0-9]{3,4}$')]]
    });
  }

  ngOnInit(): void {
    if(this.data.paymentMethodId) {
      this.paymentMethodService.getPaymentMethodById(this.data.paymentMethodId).subscribe((res) => {
        if (res) {
          this.editPaymentMethodForm.patchValue({
            id: res.paymentMethodId,
            cardType: res.cardType,
            cardNumber: res.cardNumber,
            expiryMonth: res.expiryMonth,
            expiryYear: res.expiryYear,
            securityCode: res.securityCode
          });
        }
      });
    }
  }

  onSubmit() {
    if (this.editPaymentMethodForm.valid) {
      const updatedPaymentMethod = {
        paymentMethodId: this.data.paymentMethodId,
        cardType: this.editPaymentMethodForm.get('cardType')?.value,
        cardNumber: this.editPaymentMethodForm.get('cardNumber')?.value,
        expiryMonth: this.editPaymentMethodForm.get('expiryMonth')?.value,
        expiryYear: this.editPaymentMethodForm.get('expiryYear')?.value,
        securityCode: this.editPaymentMethodForm.get('securityCode')?.value
      };

      this.dialogRef.close(updatedPaymentMethod);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }

}
