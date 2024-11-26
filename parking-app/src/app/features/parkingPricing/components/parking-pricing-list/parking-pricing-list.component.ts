import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ParkingPricingService } from '../../service/parking-pricing.service';
import { ParkingPricing } from '../../../../shared/models/ParkingPricing.model';

@Component({
  selector: 'app-parking-pricing-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule],
  templateUrl: './parking-pricing-list.component.html',
  styleUrl: './parking-pricing-list.component.css'
})
export class ParkingPricingListComponent implements OnInit{

  parkingPricing: ParkingPricing[] = [];
  displayedColumns: string[] = ['id', 'parking_lot_address', 'day_of_week', 'morning_hr_cost', 'midday_hr_cost', 'evening_hr_cost', 'all_day_cost'];

  constructor(private parkingPricingService: ParkingPricingService){}

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

}
