import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ParkingOneTimeRes } from '../../../../shared/models/ParkingOneTimeRes.model';
import { ParkingOneTimeResService } from '../../service/parking-one-time-res.service';
import { CommonModule, DatePipe } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ParkingOneTimeResDeleteComponent } from '../parking-one-time-res-delete/parking-one-time-res-delete.component';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-parking-one-time-res-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatButtonModule, CommonModule, ParkingOneTimeResDeleteComponent, RouterModule, MatIconModule, MatPaginatorModule],
  templateUrl: './parking-one-time-res-list.component.html',
  styleUrl: './parking-one-time-res-list.component.css'
})
export class ParkingOneTimeResListComponent implements OnInit{

  oneTimeResIdToDelete: number | undefined;
  oneTimeReservations: ParkingOneTimeRes[] = [];
  displayedColumns: string[] = ['id', 'vehicleNumber', 'customerName', 'parkingLotAddress', 'bookingTime', 'netCost', 'actions'];
  showDeleteDialog = false;

  totalReservations: number = 0;
  displayedOneTimeReservations: ParkingOneTimeRes[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private parkingOneTimeResService: ParkingOneTimeResService, private datePipe: DatePipe, private router: Router){}

  ngOnInit(): void {
    this.loadAllOneTimeRes();
  }

  loadAllOneTimeRes() {
    this.parkingOneTimeResService.getAllOneTimeRes().subscribe((res) => {
      this.oneTimeReservations = res;
      this.totalReservations = this.oneTimeReservations.length;
      this.paginatedReservations();
    })
  }

  getFormattedDate(date: string) {
    return this.datePipe.transform(date, 'MMMM d, yyyy');
  }

  viewDetails(id: number) {
    this.router.navigate([`/parkingOneTimeReservation`], {queryParams: { oneTimeResId: id }});
  }

  openDeleteDialog(id: number) {
    this.oneTimeResIdToDelete = id;
    this.showDeleteDialog = true;
  }

  deleteOneTimeResById(id: number) {
    this.parkingOneTimeResService.deleteOneTimeResById(id).subscribe(() => {
      this.loadAllOneTimeRes();
      this.showDeleteDialog = false;
    })
  }

  cancel() {
    this.showDeleteDialog = false;
  }

  paginatedReservations() {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    this.displayedOneTimeReservations = this.oneTimeReservations.slice(startIndex, startIndex + this.paginator.pageSize);
  }

}
