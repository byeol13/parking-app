import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-add-payment-method-dialog',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './add-payment-method-dialog.component.html',
  styleUrl: './add-payment-method-dialog.component.css'
})
export class AddPaymentMethodDialogComponent {

  constructor(private dialogRef: MatDialogRef<AddPaymentMethodDialogComponent>){}

  onOkay() {
    this.dialogRef.close();
  }
}
