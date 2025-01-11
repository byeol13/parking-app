import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-update-pricing-exception-dialog',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './update-pricing-exception-dialog.component.html',
  styleUrl: './update-pricing-exception-dialog.component.css'
})
export class UpdatePricingExceptionDialogComponent {

  constructor(private dialogRef: MatDialogRef<UpdatePricingExceptionDialogComponent>){}

  onOkay() {
    this.dialogRef.close();
  }
}
