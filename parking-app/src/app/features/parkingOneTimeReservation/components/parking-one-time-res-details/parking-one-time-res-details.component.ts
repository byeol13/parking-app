import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ParkingOneTimeResService } from '../../service/parking-one-time-res.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ParkingOneTimeRes } from '../../../../shared/models/ParkingOneTimeRes.model';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-parking-one-time-res-details',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatTableModule, MatCardModule, RouterModule, MatButtonModule, MatIconModule],
  templateUrl: './parking-one-time-res-details.component.html',
  styleUrl: './parking-one-time-res-details.component.css'
})
export class ParkingOneTimeResDetailsComponent implements OnInit{

  oneTimeResId: any;
  oneTimeReservations: ParkingOneTimeRes | undefined;
  displayedColumns: string[] = ['id', 'vehicleNumber', 'customerName', 'parkingLotAddress', 'bookingTime', 'pay_for_min_hr', 'booking_for_hr', 'basic_parking_cost', 'offer_code', 'netCost', 'is_paid', 'actions'];

  constructor(private parkingOneTimeResService: ParkingOneTimeResService, private datePipe: DatePipe, private activatedRoute: ActivatedRoute){
    this.oneTimeResId = this.activatedRoute.snapshot.queryParamMap.get('oneTimeResId');
  }

  ngOnInit(): void {
    this.loadOneTimeResById();
  }

  loadOneTimeResById() {
    if(this.oneTimeResId) {
      this.parkingOneTimeResService.getOneTimeResById(this.oneTimeResId).subscribe((res) => {
        this.oneTimeReservations = res;
      })
    }
  }

  getFormattedDate(date: string) {
    return this.datePipe.transform(date, 'MMMM d, yyyy');
  }

}
