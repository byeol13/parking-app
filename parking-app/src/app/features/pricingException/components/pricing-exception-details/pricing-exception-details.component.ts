import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PrincingExceptionService } from '../../service/princing-exception.service';
import { ActivatedRoute } from '@angular/router';
import { PricingException } from '../../../../shared/models/PricingException.model';

@Component({
  selector: 'app-pricing-exception-details',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatCardModule, MatTableModule],
  templateUrl: './pricing-exception-details.component.html',
  styleUrl: './pricing-exception-details.component.css'
})
export class PricingExceptionDetailsComponent implements OnInit{

  pricingExceptionId: any;
  pricingExceptions: PricingException | undefined;
  displayedColumns: string[] = ['id', 'parking_lot_address', 'zip', 'operating_company', 'date', 'morning_hr_cost', 'midday_hr_cost', 'evening_hr_cost', 'all_day_cost'];

  constructor(private pricingExceptionService: PrincingExceptionService, private activatedRoute: ActivatedRoute){
    this.pricingExceptionId = this.activatedRoute.snapshot.queryParamMap.get('pricingExceptionId');
  }
  
  ngOnInit(): void {
    this.loadPricingExceptionById();
  }

  loadPricingExceptionById() {
    if(this.pricingExceptionId) {
      this.pricingExceptionService.getPricingExceptionById(this.pricingExceptionId).subscribe((res) => {
        this.pricingExceptions = res;
      })
    }
  }

}
