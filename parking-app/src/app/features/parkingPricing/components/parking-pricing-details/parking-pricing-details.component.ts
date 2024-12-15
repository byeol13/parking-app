import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ParkingPricingService } from '../../service/parking-pricing.service';
import { ActivatedRoute } from '@angular/router';
import { ParkingPricing } from '../../../../shared/models/ParkingPricing.model';

@Component({
  selector: 'app-parking-pricing-details',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatTableModule, MatCardModule],
  templateUrl: './parking-pricing-details.component.html',
  styleUrl: './parking-pricing-details.component.css'
})
export class ParkingPricingDetailsComponent implements OnInit{

  parkingPricingId: any;
  parkingPricing: ParkingPricing | undefined;

  displayedColumns: string[] = ['id', 'parking_lot_address', 'zip', 'operating_company', 'day_of_week', 'morning_hr_cost', 'midday_hr_cost', 'evening_hr_cost', 'all_day_cost'];

  constructor(private parkingPricingService: ParkingPricingService, private activatedRoute: ActivatedRoute){
    this.parkingPricingId = this.activatedRoute.snapshot.queryParamMap.get('parkingPricingId');
  }

  ngOnInit(): void {
    this.loadParkingPricingById();
  }

  loadParkingPricingById() {
    if(this.parkingPricingId) {
      this.parkingPricingService.getParkingPricingById(this.parkingPricingId).subscribe((res) => {
        this.parkingPricing = res;
      })
    }
  }

  getDayOfWeek(day: number): string {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return daysOfWeek[day - 1];
  }

}
