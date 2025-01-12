import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ParkingMonthlyPassService } from '../../service/parking-monthly-pass.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ParkingMonthlyPass } from '../../../../shared/models/ParkingMonthlyPass.model';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-parking-monthly-pass-details',
  standalone: true,
  imports: [MatToolbarModule, MatCardModule, MatTableModule, CommonModule, RouterModule, MatButtonModule, MatIconModule],
  templateUrl: './parking-monthly-pass-details.component.html',
  styleUrl: './parking-monthly-pass-details.component.css'
})
export class ParkingMonthlyPassDetailsComponent implements OnInit{

  monthlyPassId: any;
  monthlyPasses: ParkingMonthlyPass | undefined;
  displayedColumns: string[] = ['id', 'customerName', 'customerContact', 'billingAddress', 'parkingLotAddress', 'startDate', 'duration', 'cost', 'valetParking', 'nightOps', 'actions'];

  constructor(private parkingMonthlyPassService: ParkingMonthlyPassService, private activatedRoute: ActivatedRoute){
    this.monthlyPassId = this.activatedRoute.snapshot.queryParamMap.get('monthlyPassId');
  }
  
  ngOnInit(): void {
    this.loadParkingMonthlyPassById();
  }

  loadParkingMonthlyPassById() {
    if(this.monthlyPassId) {
      this.parkingMonthlyPassService.getParkingMonthlyPassById(this.monthlyPassId).subscribe((res) => {
        this.monthlyPasses = res;
      })
    }
  }

}
