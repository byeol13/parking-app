import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ParkingLot } from '../../../../shared/models/ParkingLot.model';
import { ParkingLotService } from '../../service/parking-lot.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-parking-lot-details',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatTableModule, MatCardModule, RouterModule, MatButtonModule, MatIconModule],
  templateUrl: './parking-lot-details.component.html',
  styleUrl: './parking-lot-details.component.css'
})
export class ParkingLotDetailsComponent implements OnInit{

  parkingLotId: any;
  parkingLots: ParkingLot | undefined;
  displayedColumns: string[] = ['id', 'number_of_blocks', 'is_slot_available', 'address', 'zip', 'operating_company_n', 'minimum_hr_to_pay', 'is_reentry_allowed', 'is_valet_parking_available', 'operational_in_night', 'is_monthly_pass_allow', 'monthly_pass_cost', 'actions'];

  constructor(private parkingLotService: ParkingLotService, private activatedRoute: ActivatedRoute){
    this.parkingLotId = this.activatedRoute.snapshot.queryParamMap.get('parkingLotId');
  }

  ngOnInit(): void {
    this.loadParkingLotById();
  }

  loadParkingLotById() {
    if(this.parkingLotId) {
      this.parkingLotService.getParkingLotById(this.parkingLotId).subscribe((res) => {
        this.parkingLots = res;
      })
    }
  }

}
