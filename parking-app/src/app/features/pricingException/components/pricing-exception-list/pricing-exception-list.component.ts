import { PricingException } from './../../../../shared/models/PricingException.model';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PrincingExceptionService } from '../../service/princing-exception.service';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { PricingExceptionDeleteComponent } from '../pricing-exception-delete/pricing-exception-delete.component';

@Component({
  selector: 'app-pricing-exception-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatButtonModule, CommonModule, PricingExceptionDeleteComponent],
  templateUrl: './pricing-exception-list.component.html',
  styleUrl: './pricing-exception-list.component.css'
})
export class PricingExceptionListComponent implements OnInit{

  pricingExceptionIdToDelete: number | undefined;
  pricingExceptions: PricingException[] = [];
  displayedColumns: string[] = ['id', 'parking_lot_address', 'date', 'morning_hr_cost', 'midday_hr_cost', 'evening_hr_cost', 'all_day_cost', 'actions'];
  showDeleteDialog = false;

  constructor(private pricingExceptionService: PrincingExceptionService, private router: Router){}

  ngOnInit(): void {
   this.loadAllPricingExceptions(); 
  }

  loadAllPricingExceptions() {
    this.pricingExceptionService.getAllPricingExceptions().subscribe((res) => {
      this.pricingExceptions = res;
    })
  }

  viewDetails(id: number) {
    this.router.navigate([`/pricingException`], {queryParams: { pricingExceptionId: id }});
  }

  openDeleteDialog(id: number) {
    this.pricingExceptionIdToDelete = id;
    this.showDeleteDialog = true;
  }

  deletePricingExceptionById(id: number) {
    this.pricingExceptionService.deletePricingExceptionById(id).subscribe(() => {
      this.loadAllPricingExceptions();
      this.showDeleteDialog = false;
    })
  }

  cancel() {
    this.showDeleteDialog = false;
  }

}
