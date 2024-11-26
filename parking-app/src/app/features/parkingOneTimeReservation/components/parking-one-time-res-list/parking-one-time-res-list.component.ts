import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ParkingOneTimeRes } from '../../../../shared/models/ParkingOneTimeRes.model';
import { ParkingOneTimeResService } from '../../service/parking-one-time-res.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-parking-one-time-res-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule],
  templateUrl: './parking-one-time-res-list.component.html',
  styleUrl: './parking-one-time-res-list.component.css'
})
export class ParkingOneTimeResListComponent implements OnInit{

  oneTimeReservations: ParkingOneTimeRes[] = [];
  displayedColumns: string[] = ['id', 'vehicleNumber', 'customerName', 'parkingLotAddress', 'bookingTime', 'netCost'];

  constructor(private parkingOneTimeResService: ParkingOneTimeResService, private datePipe: DatePipe){}

  ngOnInit(): void {
    this.loadAllOneTimeRes();
  }

  loadAllOneTimeRes() {
    this.parkingOneTimeResService.getAllOneTimeRes().subscribe((res) => {
      this.oneTimeReservations = res;
      console.log(this.oneTimeReservations);
    })
  }

  getFormattedDate(date: string) {
    return this.datePipe.transform(date, 'MMMM d, yyyy');
  }

}
