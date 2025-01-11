import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-update-payment-method-dialog',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './update-payment-method-dialog.component.html',
  styleUrl: './update-payment-method-dialog.component.css'
})
export class UpdatePaymentMethodDialogComponent {

  constructor(private dialogRef: MatDialogRef<UpdatePaymentMethodDialogComponent>){}

  onOkay() {
    this.dialogRef.close();
  }
}
