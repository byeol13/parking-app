import { Component, OnInit, ViewChild } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { ParkingLotService } from '../../service/parking-lot.service';
import { ParkingLot } from '../../../../shared/models/ParkingLot.model';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ParkingLotDeleteComponent } from '../parking-lot-delete/parking-lot-delete.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-parking-lot-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatButtonModule, CommonModule, ParkingLotDeleteComponent, RouterModule, MatPaginator],
  templateUrl: './parking-lot-list.component.html',
  styleUrl: './parking-lot-list.component.css'
})
export class ParkingLotListComponent implements OnInit{

  parkingLotIdToDelete: number | undefined;
  parkingLots: ParkingLot[] = [];
  displayedColumns: string[] = ['id', 'number_of_blocks', 'is_slot_available', 'address', 'minimum_hr_to_pay', 'manage', 'actions'];
  showDeleteDialog = false;

  totalLots: number = 0;
  displayedLots: ParkingLot[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private parkingLotService: ParkingLotService, private router: Router){}
  
  ngOnInit(): void {
    this.loadAllParkingLots();
  }

  loadAllParkingLots() {
    this.parkingLotService.getAllParkingLots().subscribe((res) => {
      this.parkingLots = res;
      this.totalLots = this.parkingLots.length;
      this.paginatedLots();
    })
  }

  viewDetails(id: number) {
    this.router.navigate(['/parkingLot'], { queryParams: { parkingLotId: id } });
  }

  openDeleteDialog(id: number) {
    this.parkingLotIdToDelete = id;
    this.showDeleteDialog = true;
  }

  deleteParkingLotById(id: number) {
    this.parkingLotService.deleteParkingLotById(id).subscribe(() => {
      this.loadAllParkingLots();
      this.showDeleteDialog = false;
    })
  } 

  cancel() {
    this.showDeleteDialog = false;
  }

  paginatedLots() {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    this.displayedLots = this.parkingLots.slice(startIndex, startIndex + this.paginator.pageSize);
  }
}
