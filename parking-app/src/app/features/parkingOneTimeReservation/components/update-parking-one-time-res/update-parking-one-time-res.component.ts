import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ParkingLot } from '../../../../shared/models/ParkingLot.model';
import { Vehicle } from '../../../../shared/models/Vehicle.model';
import { ParkingLotService } from '../../../parkingLot/service/parking-lot.service';
import { VehicleService } from '../../../vehicle/service/vehicle.service';
import { ParkingOneTimeResService } from '../../service/parking-one-time-res.service';
import { ParkingOneTimeRes } from '../../../../shared/models/ParkingOneTimeRes.model';

@Component({
  selector: 'app-update-parking-one-time-res',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatCardModule, MatInputModule, MatDatepickerModule, RouterModule],
  templateUrl: './update-parking-one-time-res.component.html',
  styleUrl: './update-parking-one-time-res.component.css'
})
export class UpdateParkingOneTimeResComponent implements OnInit{

  editOneTimeResForm: FormGroup;
  vehicles: Vehicle[] = [];
  parkingLots: ParkingLot[] = [];
  oneTimeResId: any;

  constructor(private fb: FormBuilder, private oneTimeResService: ParkingOneTimeResService, private router: Router, private parkingLotService: ParkingLotService, private vehicleService: VehicleService, private activatedRoute: ActivatedRoute
  ){

    this.editOneTimeResForm = this.fb.group({
      id: [{value: '', disabled: true}],
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

  ngOnInit(): void {
    this.oneTimeResId = this.activatedRoute.snapshot.paramMap.get('oneTimeResId');

    if(this.oneTimeResId) {
      this.oneTimeResService.getOneTimeResById(this.oneTimeResId).subscribe((res) => {
        if (res) {
          this.editOneTimeResForm.patchValue({
            id: res.oneTimeResId,
            vehicleId: res.vehicleDTO.vehicleId, 
            parkingLotId: res.parkingLotDTO.parkingLotId, 
            startTimestamp: res.startTimestamp, 
            payForMinHr: res.payForMinHr, 
            bookingForHr: res.bookingForHr, 
            basicParkingCost: res.basicParkingCost, 
            offerCode: res.offerCode, 
            netCost: res.netCost, 
            isPaid: res.isPaid
          });
        }
      });
    }
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

  onSubmit() {
    if(this.editOneTimeResForm.valid) {
      const updatedOneTimeRes: ParkingOneTimeRes = {
        oneTimeResId: this.oneTimeResId,
        startTimestamp: this.editOneTimeResForm.get('startTimestamp')?.value, 
        payForMinHr: this.editOneTimeResForm.get('payForMinHr')?.value, 
        bookingForHr: this.editOneTimeResForm.get('bookingForHr')?.value, 
        basicParkingCost: this.editOneTimeResForm.get('basicParkingCost')?.value,  
        offerCode: this.editOneTimeResForm.get('offerCode')?.value,  
        netCost: this.editOneTimeResForm.get('netCost')?.value,  
        isPaid: this.editOneTimeResForm.get('isPaid')?.value, 
        vehicleDTO: {
          vehicleId: this.editOneTimeResForm.get('vehicleId')?.value
        },
        parkingLotDTO: {
          parkingLotId: this.editOneTimeResForm.get('parkingLotId')?.value, 
        }
      };

      this.oneTimeResService.updateOneTimeRes(updatedOneTimeRes).subscribe(() => {
        this.router.navigate(['/parkingOneTimeReservationList']);
      });
    }
  }
}
