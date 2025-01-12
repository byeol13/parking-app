import { PricingException } from './../../../../shared/models/PricingException.model';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PricingExceptionService } from '../../service/pricing-exception.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { PricingExceptionDeleteComponent } from '../pricing-exception-delete/pricing-exception-delete.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { AddPricingExceptionComponent } from '../add-pricing-exception/add-pricing-exception.component';
import { AddPricingExceptionDialogComponent } from '../add-pricing-exception-dialog/add-pricing-exception-dialog.component';
import { UpdatePricingExceptionComponent } from '../update-pricing-exception/update-pricing-exception.component';
import { UpdatePricingExceptionDialogComponent } from '../update-pricing-exception-dialog/update-pricing-exception-dialog.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pricing-exception-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatButtonModule, CommonModule, PricingExceptionDeleteComponent, MatCardModule, MatIconModule, RouterModule],
  templateUrl: './pricing-exception-list.component.html',
  styleUrl: './pricing-exception-list.component.css'
})
export class PricingExceptionListComponent implements OnInit{

  pricingExceptionIdToDelete: number | undefined;
  pricingExceptions: PricingException[] = [];
  displayedColumns: string[] = ['id', 'date', 'morning_hr_cost', 'midday_hr_cost', 'evening_hr_cost', 'all_day_cost', 'actions'];
  parkingLotId: any;
  showDeleteDialog = false;
  noPricingExceptionMessage: string = "No pricing exceptions available for this parking lot"

  constructor(private pricingExceptionService: PricingExceptionService, private activatedRoute: ActivatedRoute, private dialog: MatDialog){}

  ngOnInit(): void {
    this.parkingLotId = +this.activatedRoute.snapshot.paramMap.get('parkingLotId')!;
    this.loadPricingExceptions(); 
  }

  loadPricingExceptions() {
    this.pricingExceptionService.getAllPricingExceptions().subscribe((res: PricingException[]) => {
      this.pricingExceptions = res.filter(pricingException => pricingException.parkingLotDTO.parkingLotId === this.parkingLotId);
    });
  }

  openDeleteDialog(id: number) {
    this.pricingExceptionIdToDelete = id;
    this.showDeleteDialog = true;
  }

  deletePricingExceptionById(id: number) {
    this.pricingExceptionService.deletePricingExceptionById(id).subscribe(() => {
      this.loadPricingExceptions();
      this.showDeleteDialog = false;
    })
  }

  cancel() {
    this.showDeleteDialog = false;
  }

  toggleAddPricingException() {
    const addDialog = this.dialog.open(AddPricingExceptionComponent, {
      width: '550px'
    });

    addDialog.afterClosed().subscribe((res) => {
      if(res) {
        const newPricingException = {
          ...res,
          parkingLotDTO: {
            parkingLotId: this.parkingLotId
          }
        };

        this.pricingExceptionService.addPricingException(newPricingException).subscribe(() => {

          const successfulMessage = this.dialog.open(AddPricingExceptionDialogComponent, {
            width: '400px', height: '200px'
          });

          successfulMessage.afterClosed().subscribe(() => {
            this.loadPricingExceptions();
          })
        });
      }
    });
  }

  toggleUpdatePricingException(pricingExceptionId: number) {
    const dialogRef = this.dialog.open(UpdatePricingExceptionComponent, {
      width: '550px',
      data: { pricingExceptionId }
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        const updatedPricingException = {
          ...res,
          parkingLotDTO: {
            parkingLotId: this.parkingLotId
          }
        };

        this.pricingExceptionService.updatePricingException(updatedPricingException).subscribe(() => {
          const successfulMessage = this.dialog.open(UpdatePricingExceptionDialogComponent, {
            width: '400px', height: '200px'
          });

          successfulMessage.afterClosed().subscribe(() => {
            this.loadPricingExceptions();
          })
        });
      }
    });
  } 

}
