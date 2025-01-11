import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { VehicleService } from '../../service/vehicle.service';

@Component({
  selector: 'app-update-vehicle',
  standalone: true,
  imports: [MatTableModule, MatCardModule, CommonModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatOptionModule, MatSelectModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './update-vehicle.component.html',
  styleUrl: './update-vehicle.component.css'
})
export class UpdateVehicleComponent implements OnInit{

  editVehicleForm: FormGroup;

  constructor(private fb: FormBuilder, 
    public dialogRef: MatDialogRef<UpdateVehicleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {vehicleId: number},
    private vehicleService: VehicleService
  ){
    this.editVehicleForm = this.fb.group({
      id: [{value: '', disabled: true}],
      vehicleNumber: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if(this.data.vehicleId) {
      this.vehicleService.getVehicleById(this.data.vehicleId).subscribe((res) => {
        if (res) {
          this.editVehicleForm.patchValue({
            id: res.vehicleId,
            vehicleNumber: res.vehicleNumber
          });
        }
      });
    }
  }

  onSubmit() {
    if (this.editVehicleForm.valid) {
      const updatedVehicle = {
        vehicleId: this.data.vehicleId,
        vehicleNumber: this.editVehicleForm.get('vehicleNumber')?.value
      };

      this.dialogRef.close(updatedVehicle);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
