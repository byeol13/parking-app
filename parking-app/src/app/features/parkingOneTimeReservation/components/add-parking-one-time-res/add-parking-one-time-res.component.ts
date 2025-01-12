import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Vehicle } from '../../../../shared/models/Vehicle.model';
import { ParkingLot } from '../../../../shared/models/ParkingLot.model';
import { ParkingOneTimeResService } from '../../service/parking-one-time-res.service';
import { Router } from '@angular/router';
import { ParkingLotService } from '../../../parkingLot/service/parking-lot.service';
import { VehicleService } from '../../../vehicle/service/vehicle.service';
import { MatDialog } from '@angular/material/dialog';
import { AddParkingOneTimeResDialogComponent } from '../add-parking-one-time-res-dialog/add-parking-one-time-res-dialog.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-parking-one-time-res',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatCardModule, MatInputModule, MatDatepickerModule],
  templateUrl: './add-parking-one-time-res.component.html',
  styleUrl: './add-parking-one-time-res.component.css'
})
export class AddParkingOneTimeResComponent {

  addOneTimeResForm: FormGroup;
  vehicles: Vehicle[] = [];
  parkingLots: ParkingLot[] = [];

  constructor(private fb: FormBuilder, private oneTimeResService: ParkingOneTimeResService, private router: Router, private parkingLotService: ParkingLotService, private vehicleService: VehicleService, private dialog: MatDialog,

    private http: HttpClient
  ){

    this.addOneTimeResForm = this.fb.group({
      vehicleId: ['', Validators.required], 
      parkingLotId: ['', Validators.required], 
      startTimestamp: ['', Validators.required], 
      payForMinHr: ['', Validators.required], 
      bookingForHr: ['', [Validators.required, Validators.min(1)]], 
      basicParkingCost: ['', [Validators.required, Validators.min(0)]], 
      offerCode: ['', Validators.pattern('^[A-Za-z0-9]*$')], 
      netCost: ['', [Validators.required, Validators.min(0)]], 
      isPaid: ['', Validators.required] 
    });

    this.loadVehicles();
    this.loadParkingLots();

  }

  loadVehicles() {
    this.vehicleService.getAllVehicles().subscribe((res) => {
      this.vehicles = res;
    });
  }

  loadParkingLots() {
    this.parkingLotService.getAllParkingLots().subscribe((res) => {
      this.parkingLots = res;
    });
  }

  openConfirmationDialog() {
    if (this.addOneTimeResForm.valid) {
      const addDialog = this.dialog.open(AddParkingOneTimeResDialogComponent, {
        width: '500px', height: '250px'
      });

      addDialog.afterClosed().subscribe((res) => {
        if(res == 'confirm') {
          this.saveOneTimeRes();
        }
      });
    }
  }

  saveOneTimeRes() {
    const newOneTimeRes = {
      startTimestamp: this.addOneTimeResForm.get('startTimestamp')?.value,  
      payForMinHr: this.addOneTimeResForm.get('payForMinHr')?.value, 
      bookingForHr: this.addOneTimeResForm.get('bookingForHr')?.value, 
      basicParkingCost: this.addOneTimeResForm.get('basicParkingCost')?.value, 
      offerCode: this.addOneTimeResForm.get('offerCode')?.value,  
      netCost: this.addOneTimeResForm.get('netCost')?.value,  
      isPaid: this.addOneTimeResForm.get('isPaid')?.value, 
      vehicleDTO: {
        vehicleId: this.addOneTimeResForm.get('vehicleId')?.value
      },
      parkingLotDTO: {
        parkingLotId: this.addOneTimeResForm.get('parkingLotId')?.value
      }
    };

    this.oneTimeResService.addOneTimeRes(newOneTimeRes).subscribe(() => {
      this.router.navigate(['/parkingOneTimeReservationList']);
    });
  }

  goBack() {
    this.router.navigate(['/parkingOneTimeReservationList']);
  }

}
