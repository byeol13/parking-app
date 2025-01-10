import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-update-parking-pricing-dialog',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './update-parking-pricing-dialog.component.html',
  styleUrl: './update-parking-pricing-dialog.component.css'
})
export class UpdateParkingPricingDialogComponent {

  constructor(private dialogRef: MatDialogRef<UpdateParkingPricingDialogComponent>){}

  onOkay() {
    this.dialogRef.close();
  }
}
