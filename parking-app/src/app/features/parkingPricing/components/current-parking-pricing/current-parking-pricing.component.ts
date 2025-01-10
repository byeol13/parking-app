import { Component, OnInit } from '@angular/core';
import { ParkingPricing } from '../../../../shared/models/ParkingPricing.model';
import { ParkingPricingService } from '../../service/parking-pricing.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialog } from '@angular/material/dialog';
import { AddParkingLotDialogComponent } from '../../../parkingLot/components/add-parking-lot-dialog/add-parking-lot-dialog.component';
import { AddParkingPricingDialogComponent } from '../add-parking-pricing-dialog/add-parking-pricing-dialog.component';
import { ParkingPricingDeleteComponent } from '../parking-pricing-delete/parking-pricing-delete.component';

@Component({
  selector: 'app-current-parking-pricing',
  standalone: true,
  imports: [MatTableModule, MatCardModule, CommonModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatOptionModule, MatSelectModule, ReactiveFormsModule, MatInputModule, ParkingPricingDeleteComponent],
  templateUrl: './current-parking-pricing.component.html',
  styleUrl: './current-parking-pricing.component.css'
})
export class CurrentParkingPricingComponent implements OnInit{

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

  getDayName(dayOfWeek: number): string {
    return this.dayOfWeekNames[dayOfWeek];
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
