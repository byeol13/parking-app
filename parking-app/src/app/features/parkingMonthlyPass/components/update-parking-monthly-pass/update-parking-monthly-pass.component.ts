import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Customer } from '../../../../shared/models/Customer.model';
import { ParkingLot } from '../../../../shared/models/ParkingLot.model';
import { CustomerService } from '../../../customer/service/customer.service';
import { ParkingLotService } from '../../../parkingLot/service/parking-lot.service';
import { ParkingMonthlyPassService } from '../../service/parking-monthly-pass.service';
import { ParkingMonthlyPass } from '../../../../shared/models/ParkingMonthlyPass.model';

@Component({
  selector: 'app-update-parking-monthly-pass',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatCardModule, MatInputModule, MatDatepickerModule, RouterModule],
  templateUrl: './update-parking-monthly-pass.component.html',
  styleUrl: './update-parking-monthly-pass.component.css'
})
export class UpdateParkingMonthlyPassComponent implements OnInit{

  editMonthlyPassForm: FormGroup;
  customers: Customer[] = [];
  parkingLots: ParkingLot[] = [];
  monthlyPassId: any;

  constructor(private fb: FormBuilder, private customerService: CustomerService, private parkingLotService: ParkingLotService, private router: Router, private monthlyPassService: ParkingMonthlyPassService, private activatedRoute: ActivatedRoute){

    this.editMonthlyPassForm = this.fb.group({
      id: [{value: '', disabled: true}],
      purchaseDate: ['', Validators.required],
      startDate: ['', Validators.required],
      durationInDays: ['', [Validators.required, Validators.min(1)]],
      cost: ['', Validators.required],
      customerId: ['', Validators.required],
      parkingLotId: ['', Validators.required]
    });

    this.loadCustomers();
    this.loadParkingLots();
  }

  ngOnInit(): void {
    this.monthlyPassId = this.activatedRoute.snapshot.paramMap.get('monthlyPassId');

    if(this.monthlyPassId) {
      this.monthlyPassService.getParkingMonthlyPassById(this.monthlyPassId).subscribe((res) => {
        if (res) {
          this.editMonthlyPassForm.patchValue({
            id: res.monthlyPassId,
            purchaseDate: res.purchaseDate,
            startDate: res.startDate,
            durationInDays: res.durationInDays,
            cost: res.cost,
            customerId: res.customerDTO.customerId,
            parkingLotId: res.parkingLotDTO.parkingLotId
          });
        }
      });
    }
  }

  loadCustomers() {
    this.customerService.getAllCustomers().subscribe((res) => {
      this.customers = res;
    });
  }

  loadParkingLots() {
    this.parkingLotService.getAllParkingLots().subscribe((res) => {
      this.parkingLots = res;
    });
  }

  onSubmit() {
    if(this.editMonthlyPassForm.valid) {
      const updatedMonthlyPass: ParkingMonthlyPass = {
        monthlyPassId: this.monthlyPassId,
        purchaseDate: this.editMonthlyPassForm.get('purchaseDate')?.value,
        startDate: this.editMonthlyPassForm.get('startDate')?.value,
        durationInDays: this.editMonthlyPassForm.get('durationInDays')?.value,
        cost: this.editMonthlyPassForm.get('cost')?.value,
        customerDTO: {
          customerId: this.editMonthlyPassForm.get('customerId')?.value
        },
        parkingLotDTO: {
          parkingLotId: this.editMonthlyPassForm.get('parkingLotId')?.value
        }
      };

      this.monthlyPassService.updateParkingMonthlyPass(updatedMonthlyPass).subscribe(() => {
        this.router.navigate(['/parkingMonthlyPassList']);
      });
    }
  }
}
