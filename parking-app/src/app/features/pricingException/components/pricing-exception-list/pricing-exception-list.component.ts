import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PrincingExceptionService } from '../../service/princing-exception.service';
import { PricingException } from '../../../../shared/models/PricingException.model';

@Component({
  selector: 'app-pricing-exception-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule],
  templateUrl: './pricing-exception-list.component.html',
  styleUrl: './pricing-exception-list.component.css'
})
export class PricingExceptionListComponent implements OnInit{

  pricingExceptions: PricingException[] = [];
  displayedColumns: string[] = ['id', 'parking_lot_address', 'date', 'morning_hr_cost', 'midday_hr_cost', 'evening_hr_cost', 'all_day_cost'];

  constructor(private pricingExceptionService: PrincingExceptionService){}

  ngOnInit(): void {
   this.loadAllPricingExceptions(); 
  }

  loadAllPricingExceptions() {
    this.pricingExceptionService.getAllPricingExceptions().subscribe((res) => {
      this.pricingExceptions = res;
    })
  }

}
