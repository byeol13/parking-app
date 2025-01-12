import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-add-parking-one-time-res-dialog',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './add-parking-one-time-res-dialog.component.html',
  styleUrl: './add-parking-one-time-res-dialog.component.css'
})
export class AddParkingOneTimeResDialogComponent {

  constructor(private dialogRef: MatDialogRef<AddParkingOneTimeResDialogComponent>){}

  onConfirm() {
    this.dialogRef.close('confirm');
  }

  onCancel() {
    this.dialogRef.close('cancel');
  }
}
