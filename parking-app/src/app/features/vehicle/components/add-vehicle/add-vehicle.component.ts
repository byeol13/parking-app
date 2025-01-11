import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-add-vehicle',
  standalone: true,
  imports: [MatTableModule, MatCardModule, CommonModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatOptionModule, MatSelectModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './add-vehicle.component.html',
  styleUrl: './add-vehicle.component.css'
})
export class AddVehicleComponent {

  addVehicleForm: FormGroup;

  constructor(private fb: FormBuilder, 
    public dialogRef: MatDialogRef<AddVehicleComponent>
  ){
    this.addVehicleForm = this.fb.group({
      vehicleNumber: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.addVehicleForm.valid) {
      this.dialogRef.close(this.addVehicleForm.value);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
