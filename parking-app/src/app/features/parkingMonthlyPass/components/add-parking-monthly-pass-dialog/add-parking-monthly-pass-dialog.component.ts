import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-add-parking-monthly-pass-dialog',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './add-parking-monthly-pass-dialog.component.html',
  styleUrl: './add-parking-monthly-pass-dialog.component.css'
})
export class AddParkingMonthlyPassDialogComponent {

   constructor(private dialogRef: MatDialogRef<AddParkingMonthlyPassDialogComponent>){}

  onConfirm() {
    this.dialogRef.close('confirm');
  }

  onCancel() {
    this.dialogRef.close('cancel');
  }
}
