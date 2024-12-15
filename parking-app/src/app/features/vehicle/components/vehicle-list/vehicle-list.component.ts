import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Vehicle } from '../../../../shared/models/Vehicle.model';
import { VehicleService } from '../../service/vehicle.service';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { VehicleDeleteComponent } from '../vehicle-delete/vehicle-delete.component';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatButtonModule, CommonModule, VehicleDeleteComponent],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.css'
})
export class VehicleListComponent implements OnInit{

  vehicleIdToDelete: number | undefined;
  vehicles: Vehicle[] = [];
  displayedColumns: string[] = ['id',  'vehicle_number', 'first_name', 'last_name', 'actions'];
  showDeleteDialog = false;

  constructor(private vehicleService: VehicleService, private router: Router){}

  ngOnInit(): void {
    this.loadAllVehicles();
  }

  loadAllVehicles() {
    this.vehicleService.getAllVehicles().subscribe((res) => {
      this.vehicles = res;
    })
  }

  viewDetails(id: number) {
    this.router.navigate([`/vehicle`], {queryParams: { vehicleId: id }});
  }

  openDeleteDialog(id: number) {
    this.vehicleIdToDelete = id;
    this.showDeleteDialog = true;
  }

  deleteVehicleById(id: number) {
    this.vehicleService.deleteVehicleById(id).subscribe(() => {
      this.loadAllVehicles();
      this.showDeleteDialog = false;
    })
  }

  cancelDelete() {
    this.showDeleteDialog = false;
  }

}
