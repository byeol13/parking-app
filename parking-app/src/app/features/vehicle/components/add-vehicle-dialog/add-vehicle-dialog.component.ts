import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-add-vehicle-dialog',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './add-vehicle-dialog.component.html',
  styleUrl: './add-vehicle-dialog.component.css'
})
export class AddVehicleDialogComponent {

  constructor(private dialogRef: MatDialogRef<AddVehicleDialogComponent>){}

  onOkay() {
    this.dialogRef.close();
  }
}
