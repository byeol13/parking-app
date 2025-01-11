import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-update-vehicle-dialog',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './update-vehicle-dialog.component.html',
  styleUrl: './update-vehicle-dialog.component.css'
})
export class UpdateVehicleDialogComponent {

  constructor(private dialogRef: MatDialogRef<UpdateVehicleDialogComponent>){}

  onOkay() {
    this.dialogRef.close();
  }
}
