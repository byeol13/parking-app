import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-add-parking-pricing-dialog',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './add-parking-pricing-dialog.component.html',
  styleUrl: './add-parking-pricing-dialog.component.css'
})
export class AddParkingPricingDialogComponent {

  constructor(private dialogRef: MatDialogRef<AddParkingPricingDialogComponent>){}

  onOkay() {
    this.dialogRef.close();
  }

}
