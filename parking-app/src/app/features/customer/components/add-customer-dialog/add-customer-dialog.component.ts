import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-add-customer-dialog',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './add-customer-dialog.component.html',
  styleUrl: './add-customer-dialog.component.css'
})
export class AddCustomerDialogComponent {

  constructor(private dialogRef: MatDialogRef<AddCustomerDialogComponent>){}

  onConfirm() {
    this.dialogRef.close('confirm');
  }

  onCancel() {
    this.dialogRef.close('cancel');
  }
}
