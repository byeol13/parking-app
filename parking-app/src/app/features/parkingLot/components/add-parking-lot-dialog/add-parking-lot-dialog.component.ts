import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-parking-lot-dialog',
  standalone: true,
  imports: [],
  templateUrl: './add-parking-lot-dialog.component.html',
  styleUrl: './add-parking-lot-dialog.component.css'
})
export class AddParkingLotDialogComponent {

  constructor(private dialogRef: MatDialogRef<AddParkingLotDialogComponent>){}

  onConfirm() {
    this.dialogRef.close('confirm');
  }

  onCancel() {
    this.dialogRef.close('cancel');
  }
}
