import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { ParkingLotService } from '../../service/parking-lot.service';
import { ParkingLot } from '../../../../shared/models/ParkingLot.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parking-lot-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatButtonModule],
  templateUrl: './parking-lot-list.component.html',
  styleUrl: './parking-lot-list.component.css'
})
export class ParkingLotListComponent implements OnInit{

  parkingLots: ParkingLot[] = [];
  displayedColumns: string[] = ['id', 'number_of_blocks', 'is_slot_available', 'address', 'minimum_hr_to_pay', 'actions'];

  constructor(private parkingLotService: ParkingLotService, private router: Router){}
  
  ngOnInit(): void {
    this.loadAllParkingLots();
  }

  loadAllParkingLots() {
    this.parkingLotService.getAllParkingLots().subscribe((res) => {
      this.parkingLots = res;
    })
  }

  viewDetails(id: number) {
    this.router.navigate([`/parkingLot`, id]);
  }

}
