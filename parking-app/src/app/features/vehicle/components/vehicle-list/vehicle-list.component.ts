import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Vehicle } from '../../../../shared/models/Vehicle.model';
import { VehicleService } from '../../service/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.css'
})
export class VehicleListComponent implements OnInit{

  vehicles: Vehicle[] = [];
  displayedColumns: string[] = ['id',  'vehicle_number', 'first_name', 'last_name'];

  constructor(private vehicleService: VehicleService){}

  ngOnInit(): void {
    this.loadAllVehicles();
  }

  loadAllVehicles() {
    this.vehicleService.getAllVehicles().subscribe((res) => {
      this.vehicles = res;
    })
  }

}
