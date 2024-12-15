import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ParkingPricingService } from '../../service/parking-pricing.service';
import { ParkingPricing } from '../../../../shared/models/ParkingPricing.model';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ParkingPricingDeleteComponent } from '../parking-pricing-delete/parking-pricing-delete.component';

@Component({
  selector: 'app-parking-pricing-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatButtonModule, CommonModule, ParkingPricingDeleteComponent],
  templateUrl: './parking-pricing-list.component.html',
  styleUrl: './parking-pricing-list.component.css'
})
export class ParkingPricingListComponent implements OnInit{

  parkingPricingIdToDelete: number | undefined;
  parkingPricing: ParkingPricing[] = [];
  displayedColumns: string[] = ['id', 'parking_lot_address', 'day_of_week', 'morning_hr_cost', 'midday_hr_cost', 'evening_hr_cost', 'all_day_cost', 'actions'];
  showDeleteDialog = false;

  constructor(private parkingPricingService: ParkingPricingService, private router: Router){}

  ngOnInit(): void {
    this.loadAllParkingPricings();  
  }

  loadAllParkingPricings() {
    this.parkingPricingService.getAllParkingPricings().subscribe((res) => {
      this.parkingPricing = res;
    })
  }

  getDayOfWeek(day: number): string {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return daysOfWeek[day - 1];
  }

  viewDetails(id: number) {
    this.router.navigate([`/parkingPricing`], {queryParams: { parkingPricingId: id }});
  }

  openDeleteDialog(id: number) {
    this.parkingPricingIdToDelete = id;
    this.showDeleteDialog = true;
  }

  deleteParkingPricingById(id: number) {
    this.parkingPricingService.deleteParkingPricingById(id).subscribe(() => {
      this.loadAllParkingPricings();
      this.showDeleteDialog = false;
    })
  }
  
  cancelDelete() {
    this.showDeleteDialog = false;
  }

}
