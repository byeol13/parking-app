import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Vehicle } from '../../../../shared/models/Vehicle.model';
import { VehicleService } from '../../service/vehicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle-details',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatTableModule, MatCardModule],
  templateUrl: './vehicle-details.component.html',
  styleUrl: './vehicle-details.component.css'
})
export class VehicleDetailsComponent implements OnInit{

  vehicleId: any;
  vehicles: Vehicle | undefined;
  displayedColumns: string[] = ['id', 'vehicle_number', 'first_name', 'last_name', 'contact_number', 'billing_address'];

  constructor(private vehicleService: VehicleService, private activatedRoute: ActivatedRoute){
    this.vehicleId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.loadVehicleById();
  }

  loadVehicleById() {
    if(this.vehicleId) {
      this.vehicleService.getVehicleById(this.vehicleId).subscribe((res) => {
        this.vehicles = res;
      })
    }
  }

}
