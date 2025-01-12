import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ParkingMonthlyPassService } from '../../service/parking-monthly-pass.service';
import { ParkingMonthlyPass } from '../../../../shared/models/ParkingMonthlyPass.model';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ParkingMonthlyPassDeleteComponent } from '../parking-monthly-pass-delete/parking-monthly-pass-delete.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-parking-monthly-pass-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatButtonModule, CommonModule, ParkingMonthlyPassDeleteComponent, RouterModule, MatIconModule],
  templateUrl: './parking-monthly-pass-list.component.html',
  styleUrl: './parking-monthly-pass-list.component.css'
})
export class ParkingMonthlyPassListComponent implements OnInit{

  monthlyPassIdToDelete: number | undefined;
  monthlyPasses: ParkingMonthlyPass[] = [];
  displayedColumns: string[] = ['id', 'customerName', 'parkingLotAddress', 'startDate', 'duration', 'cost', 'reentryAllowed', 'actions'];
  showDeleteDialog = false;

  constructor(private parkingMonthlyPassService: ParkingMonthlyPassService, private router: Router){}

  ngOnInit(): void {
    this.loadAllMonthlyPasses();
  }

  loadAllMonthlyPasses() {
    this.parkingMonthlyPassService.getAllParkingMonthlyPasses().subscribe((res) => {
      this.monthlyPasses = res;
    })
  }

  viewDetails(id: number) {
    this.router.navigate(['/parkingMonthlyPass'], {queryParams: { monthlyPassId: id }});
  }

  openDeleteDialog(id: number) {
    this.monthlyPassIdToDelete = id;
    this.showDeleteDialog = true;
  }

  deleteMonthlyPassById(id: number) {
    this.parkingMonthlyPassService.deleteParkingMonthlyPassById(id).subscribe(() => {
      this.loadAllMonthlyPasses();
      this.showDeleteDialog = false;
    })
  }

  cancelDelete() {
    this.showDeleteDialog = false;
  }

}
