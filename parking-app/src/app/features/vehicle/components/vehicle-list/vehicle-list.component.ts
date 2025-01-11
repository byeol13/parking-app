import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Vehicle } from '../../../../shared/models/Vehicle.model';
import { VehicleService } from '../../service/vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { VehicleDeleteComponent } from '../vehicle-delete/vehicle-delete.component';
import { MatCardModule } from '@angular/material/card';
import { CustomerService } from '../../../customer/service/customer.service';
import { MatDialog } from '@angular/material/dialog';
import { AddVehicleComponent } from '../add-vehicle/add-vehicle.component';
import { AddVehicleDialogComponent } from '../add-vehicle-dialog/add-vehicle-dialog.component';
import { UpdateVehicleComponent } from '../update-vehicle/update-vehicle.component';
import { UpdateVehicleDialogComponent } from '../update-vehicle-dialog/update-vehicle-dialog.component';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatButtonModule, CommonModule, VehicleDeleteComponent, MatCardModule],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.css'
})
export class VehicleListComponent implements OnInit{

  vehicleIdToDelete: number | undefined;
  vehicles: Vehicle[] = [];
  displayedColumns: string[] = ['vehicle_number', 'first_name', 'last_name', 'actions'];
  showDeleteDialog = false;
  customerId: any;

  noVehicleMessage: string = "No vehicles available for this customer";

  customerFirstName: string = '';  
  customerLastName: string = ''; 

  constructor(private vehicleService: VehicleService, private activatedRoute: ActivatedRoute, private customerService: CustomerService, private dialog: MatDialog){}

  ngOnInit(): void {
    this.customerId = +this.activatedRoute.snapshot.paramMap.get('customerId')!;
    this.loadAllVehicles();
    this.loadCustomerDetails();
  }

  loadAllVehicles() {
    this.vehicleService.getAllVehicles().subscribe((res: Vehicle[]) => {
      this.vehicles = res.filter(vehicle => vehicle.customerDTO.customerId === this.customerId);
    });
  }

  loadCustomerDetails() {
    this.customerService.getCustomerById(this.customerId).subscribe((customer) => {
      this.customerFirstName = customer.firstName;  
      this.customerLastName = customer.lastName;    
    });
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

  toggleAddVehicle() {
    const addDialog = this.dialog.open(AddVehicleComponent, {
      width: '550px'
    });

    addDialog.afterClosed().subscribe((res) => {
      if (res) {
        const newVehicle = {
          ...res, 
          customerDTO: {
            customerId: this.customerId
          }
        };

        this.vehicleService.addVehicle(newVehicle).subscribe(() => {
          const successfulMessage = this.dialog.open(AddVehicleDialogComponent, {
            width: '400px', height: '200px'
          });

          successfulMessage.afterClosed().subscribe(() => {
            this.loadAllVehicles();
          })
        });
      }
    });
  }

  toggleUpdateVehicle(vehicleId: number) {
    const dialogRef = this.dialog.open(UpdateVehicleComponent, {
      width: '550px',
      data: { vehicleId }
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        const updatedVehicle = {
          ...res,
          customerDTO: {
            customerId: this.customerId
          }
        };

        this.vehicleService.updateVehicle(updatedVehicle).subscribe(() => {
          const successfulMessage = this.dialog.open(UpdateVehicleDialogComponent, {
            width: '400px', height: '200px'
          });

          successfulMessage.afterClosed().subscribe(() => {
            this.loadAllVehicles();
          });
        });
      }
    });
  }

}
