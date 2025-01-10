import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-add-pricing-exception-dialog',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './add-pricing-exception-dialog.component.html',
  styleUrl: './add-pricing-exception-dialog.component.css'
})
export class AddPricingExceptionDialogComponent {

  constructor(private dialogRef: MatDialogRef<AddPricingExceptionDialogComponent>){}

  onOkay() {
    this.dialogRef.close();
  }
}
