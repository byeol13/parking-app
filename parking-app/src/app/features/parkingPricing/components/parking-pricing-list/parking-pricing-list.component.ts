import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ParkingPricingService } from '../../service/parking-pricing.service';
import { ParkingPricing } from '../../../../shared/models/ParkingPricing.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ParkingPricingDeleteComponent } from '../parking-pricing-delete/parking-pricing-delete.component';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddParkingPricingDialogComponent } from '../add-parking-pricing-dialog/add-parking-pricing-dialog.component';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-parking-pricing-list',
  standalone: true,
  imports: [MatTableModule, MatCardModule, CommonModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatOptionModule, MatSelectModule, ReactiveFormsModule, MatInputModule, ParkingPricingDeleteComponent],
  templateUrl: './parking-pricing-list.component.html',
  styleUrl: './parking-pricing-list.component.css'
})
export class ParkingPricingListComponent implements OnInit{

  // parkingPricingIdToDelete: number | undefined;
  // parkingPricing: ParkingPricing[] = [];
  // displayedColumns: string[] = ['id', 'parking_lot_address', 'day_of_week', 'morning_hr_cost', 'midday_hr_cost', 'evening_hr_cost', 'all_day_cost', 'actions'];
  // showDeleteDialog = false;

  // constructor(private parkingPricingService: ParkingPricingService, private router: Router){}

  // ngOnInit(): void {
  //   this.loadAllParkingPricings();  
  // }

  // loadAllParkingPricings() {
  //   this.parkingPricingService.getAllParkingPricings().subscribe((res) => {
  //     this.parkingPricing = res;
  //   })
  // }

  // getDayOfWeek(day: number): string {
  //   const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  //   return daysOfWeek[day - 1];
  // }

  // viewDetails(id: number) {
  //   this.router.navigate([`/parkingPricing`], {queryParams: { parkingPricingId: id }});
  // }

  // openDeleteDialog(id: number) {
  //   this.parkingPricingIdToDelete = id;
  //   this.showDeleteDialog = true;
  // }

  // deleteParkingPricingById(id: number) {
  //   this.parkingPricingService.deleteParkingPricingById(id).subscribe(() => {
  //     this.loadAllParkingPricings();
  //     this.showDeleteDialog = false;
  //   })
  // }
  
  // cancelDelete() {
  //   this.showDeleteDialog = false;
  // }

  parkingPricing: ParkingPricing[] = [];
  parkingLotId: any;
  displayedColumns: string[] = ['dayOfWeek', 'morningHrCost', 'middayHrCost', 'eveningHrCost', 'allDayCost', 'actions'];
  noPricingMessage: string = "No parking pricings available for this parking lot";

  dayOfWeekNames: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  isAddingPricing = false;
  showDeleteDialog = false;
  parkingPricingIdToDelete: number | undefined;

  addPricingForm: FormGroup;

  constructor(private parkingPricingService: ParkingPricingService, private activatedRoute: ActivatedRoute, private fb: FormBuilder, private dialog: MatDialog){

    this.addPricingForm = fb.group({
      dayOfWeek: ['', Validators.required],
      morningHrCost: ['', Validators.required],
      middayHrCost: ['', Validators.required],
      eveningHrCost: ['', Validators.required],
      allDayCost: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.parkingLotId = +this.activatedRoute.snapshot.paramMap.get('parkingLotId')!;
    this.loadParkingPricing();
  }

  loadParkingPricing() {
    this.parkingPricingService.getAllParkingPricings().subscribe((res: ParkingPricing[]) => {
      this.parkingPricing = res.filter(pricing => pricing.parkingLotDTO.parkingLotId === this.parkingLotId);
    });
  }

  getDayName(day: number): string {
    return this.dayOfWeekNames[day];
  }

  toggleAddPricing() {
    this.isAddingPricing = !this.isAddingPricing;
  }

  onSubmit() {
    if (this.addPricingForm.valid) {
      const newParkingPricing = {
        ...this.addPricingForm.value,
        parkingLotDTO: {
          parkingLotId: this.parkingLotId
        }
      };

      this.parkingPricingService.addParkingPricing(newParkingPricing).subscribe(() => {

        const successfulMessage = this.dialog.open(AddParkingPricingDialogComponent, {
          width: '400px', height: '200px'
        });

        successfulMessage.afterClosed().subscribe(() => {
          this.isAddingPricing = false;
          this.addPricingForm.reset();
          this.loadParkingPricing();
        })
      })
    }
  }

  onCancel() {
    this.isAddingPricing = false;  
    this.addPricingForm.reset(); 
  }

  openDeleteDialog(id: number) {
    this.parkingPricingIdToDelete = id;
    this.showDeleteDialog = true;
  }

  deleteParkingPricingById(id: number) {
    this.parkingPricingService.deleteParkingPricingById(id).subscribe(() => {
      this.loadParkingPricing();
      this.showDeleteDialog = false;
    });
  }

  onCancelDelete() {
    this.showDeleteDialog = false;
  }
}
