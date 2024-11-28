import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ParkingMonthlyPassService } from '../../service/parking-monthly-pass.service';
import { ParkingMonthlyPass } from '../../../../shared/models/ParkingMonthlyPass.model';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-parking-monthly-pass-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatButtonModule],
  templateUrl: './parking-monthly-pass-list.component.html',
  styleUrl: './parking-monthly-pass-list.component.css'
})
export class ParkingMonthlyPassListComponent implements OnInit{

  monthlyPasses: ParkingMonthlyPass[] = [];
  displayedColumns: string[] = ['id', 'customerName', 'parkingLotAddress', 'startDate', 'duration', 'cost', 'reentryAllowed', 'actions'];

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
    this.router.navigate(['/parkingMonthlyPass', id]);
  }

}
