import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ParkingMonthlyPassService } from '../../service/parking-monthly-pass.service';
import { ParkingMonthlyPass } from '../../../../shared/models/ParkingMonthlyPass.model';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ParkingMonthlyPassDeleteComponent } from '../parking-monthly-pass-delete/parking-monthly-pass-delete.component';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-parking-monthly-pass-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatButtonModule, CommonModule, ParkingMonthlyPassDeleteComponent, RouterModule, MatIconModule, MatPaginatorModule],
  templateUrl: './parking-monthly-pass-list.component.html',
  styleUrl: './parking-monthly-pass-list.component.css'
})
export class ParkingMonthlyPassListComponent implements OnInit{

  monthlyPassIdToDelete: number | undefined;
  monthlyPasses: ParkingMonthlyPass[] = [];
  displayedColumns: string[] = ['id', 'customerName', 'parkingLotAddress', 'startDate', 'duration', 'cost', 'reentryAllowed', 'actions'];
  showDeleteDialog = false;

  totalMonthlyPasses: number = 0;
  displayedMonthlyPasses: ParkingMonthlyPass[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private parkingMonthlyPassService: ParkingMonthlyPassService, private router: Router){}

  ngOnInit(): void {
    this.loadAllMonthlyPasses();
  }

  loadAllMonthlyPasses() {
    this.parkingMonthlyPassService.getAllParkingMonthlyPasses().subscribe((res) => {
      this.monthlyPasses = res;
      this.totalMonthlyPasses = this.monthlyPasses.length;
      this.paginatedMonthlyPasses();
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

  paginatedMonthlyPasses() {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    this.displayedMonthlyPasses = this.monthlyPasses.slice(startIndex, startIndex + this.paginator.pageSize);
  }

}
