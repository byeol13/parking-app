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
import { Customer } from '../../../../shared/models/Customer.model';
import { ParkingLot } from '../../../../shared/models/ParkingLot.model';
import { CustomerService } from '../../../customer/service/customer.service';
import { ParkingLotService } from '../../../parkingLot/service/parking-lot.service';
import { Router } from '@angular/router';
import { ParkingMonthlyPassService } from '../../service/parking-monthly-pass.service';
import { MatDialog } from '@angular/material/dialog';
import { AddParkingMonthlyPassDialogComponent } from '../add-parking-monthly-pass-dialog/add-parking-monthly-pass-dialog.component';

@Component({
  selector: 'app-add-parking-monthly-pass',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatCardModule, MatInputModule, MatDatepickerModule],
  templateUrl: './add-parking-monthly-pass.component.html',
  styleUrl: './add-parking-monthly-pass.component.css'
})
export class AddParkingMonthlyPassComponent {

  addMonthlyPassForm: FormGroup;
  customers: Customer[] = [];
  parkingLots: ParkingLot[] = [];

  constructor(private fb: FormBuilder, private customerService: CustomerService, private parkingLotService: ParkingLotService, private router: Router, private monthlyPassService: ParkingMonthlyPassService, private dialog: MatDialog){

    this.addMonthlyPassForm = this.fb.group({
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

  openConfirmationDialog() {
    if (this.addMonthlyPassForm.valid) {
      const addDialog = this.dialog.open(AddParkingMonthlyPassDialogComponent, {
        width: '400px', height: '200px'
      });

      addDialog.afterClosed().subscribe((res) => {
        if(res == 'confirm') {
          this.saveMonthlyPass();
        }
      });
    }
  }

  saveMonthlyPass() {
    const newMonthlyPass = {
      purchaseDate: this.addMonthlyPassForm.get('purchaseDate')?.value,
      startDate: this.addMonthlyPassForm.get('startDate')?.value,
      durationInDays: this.addMonthlyPassForm.get('durationInDays')?.value,
      cost: this.addMonthlyPassForm.get('cost')?.value,
      customerDTO: {
        customerId: this.addMonthlyPassForm.get('customerId')?.value
      },
      parkingLotDTO: {
        parkingLotId: this.addMonthlyPassForm.get('parkingLotId')?.value
      }
    };

    this.monthlyPassService.addParkingMonthlyPass(newMonthlyPass).subscribe(() => {
      this.router.navigate(['/parkingMonthlyPassList']);
    });
  }

  goBack() {
    this.router.navigate(['/parkingMonthlyPassList']);
  }

}
