import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ParkingPricingService } from '../../service/parking-pricing.service';
import { ParkingPricing } from '../../../../shared/models/ParkingPricing.model';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
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
import { AddParkingPricingComponent } from '../add-parking-pricing/add-parking-pricing.component';
import { UpdateParkingPricingComponent } from '../update-parking-pricing/update-parking-pricing.component';
import { HttpClient } from '@angular/common/http';
import { UpdateParkingPricingDialogComponent } from '../update-parking-pricing-dialog/update-parking-pricing-dialog.component';

@Component({
  selector: 'app-parking-pricing-list',
  standalone: true,
  imports: [MatTableModule, MatCardModule, CommonModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatOptionModule, MatSelectModule, ReactiveFormsModule, MatInputModule, ParkingPricingDeleteComponent, RouterModule],
  templateUrl: './parking-pricing-list.component.html',
  styleUrl: './parking-pricing-list.component.css'
})
export class ParkingPricingListComponent implements OnInit{

  parkingPricing: ParkingPricing[] = [];
  parkingLotId: any;
  displayedColumns: string[] = ['dayOfWeek', 'morningHrCost', 'middayHrCost', 'eveningHrCost', 'allDayCost', 'actions'];
  noPricingMessage: string = "No parking pricings available for this parking lot";

  dayOfWeekNames: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  showDeleteDialog = false;
  parkingPricingIdToDelete: number | undefined;

  constructor(private parkingPricingService: ParkingPricingService, private activatedRoute: ActivatedRoute, private dialog: MatDialog){}

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
    const dialogRef = this.dialog.open(AddParkingPricingComponent, {
      width: '550px'
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        const newParkingPricing = {
          ...res,
          parkingLotDTO: {
            parkingLotId: this.parkingLotId
          }
        };

        this.parkingPricingService.addParkingPricing(newParkingPricing).subscribe(() => {
          
          const successfulMessage = this.dialog.open(AddParkingPricingDialogComponent, {
            width: '400px', height: '200px'
          });
  
          successfulMessage.afterClosed().subscribe(() => {
            this.loadParkingPricing();
          })
        });
      }
    });
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

  toggleUpdatePricing(parkingPricingId: number) {
    const dialogRef = this.dialog.open(UpdateParkingPricingComponent, {
      width: '550px',
      data: { parkingPricingId }
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        const updatedPricing = {
          ...res,
          parkingLotDTO: {
            parkingLotId: this.parkingLotId
          }
        };
        
        this.parkingPricingService.updateParkingPricing(updatedPricing).subscribe(() => {
          const successfulMessage = this.dialog.open(UpdateParkingPricingDialogComponent, {
            width: '400px', height: '200px'
          });
  
          successfulMessage.afterClosed().subscribe(() => {
            this.loadParkingPricing(); 
          });
        });
      }
    });
  }

}
