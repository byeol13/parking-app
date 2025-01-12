import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PaymentMethodService } from '../../service/payment-method.service';
import { PaymentMethod } from '../../../../shared/models/PaymentMethod.model';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { PaymentMethodDeleteComponent } from '../payment-method-delete/payment-method-delete.component';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { CustomerService } from '../../../customer/service/customer.service';
import { MatCardModule } from '@angular/material/card';
import { AddVehicleDialogComponent } from '../../../vehicle/components/add-vehicle-dialog/add-vehicle-dialog.component';
import { AddVehicleComponent } from '../../../vehicle/components/add-vehicle/add-vehicle.component';
import { AddPaymentMethodComponent } from '../add-payment-method/add-payment-method.component';
import { AddPaymentMethodDialogComponent } from '../add-payment-method-dialog/add-payment-method-dialog.component';
import { UpdateVehicleDialogComponent } from '../../../vehicle/components/update-vehicle-dialog/update-vehicle-dialog.component';
import { UpdateVehicleComponent } from '../../../vehicle/components/update-vehicle/update-vehicle.component';
import { UpdatePaymentMethodComponent } from '../update-payment-method/update-payment-method.component';
import { UpdatePaymentMethodDialogComponent } from '../update-payment-method-dialog/update-payment-method-dialog.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-payment-method-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatButtonModule, PaymentMethodDeleteComponent, CommonModule, MatCardModule, MatIconModule, RouterModule],
  templateUrl: './payment-method-list.component.html',
  styleUrl: './payment-method-list.component.css'
})
export class PaymentMethodListComponent implements OnInit{

  paymentMethodIdToDelete: number | undefined;
  paymentMethods: PaymentMethod[] = [];
  displayedColumns: string[] = ['first_name', 'last_name', 'card_type','card_number', 'expiry_month', 'expiry_year', 'security_code', 'actions'];
  showDeleteDialog = false;

  customerId: any;
  noPaymentMethodMessage: string = "No payment method available for this customer";

  customerFirstName: string = '';  
  customerLastName: string = ''; 

  constructor(private paymentMethodService: PaymentMethodService, private activatedRoute: ActivatedRoute, private customerService: CustomerService, private dialog: MatDialog){}

  ngOnInit(): void {
    this.customerId = +this.activatedRoute.snapshot.paramMap.get('customerId')!;
    this.loadAllPaymentMethods();
    this.loadCustomerDetails();
  }

  loadAllPaymentMethods() {
    this.paymentMethodService.getAllPaymentMethods().subscribe((res: PaymentMethod[]) => {
      this.paymentMethods = res.filter(paymentMethod => paymentMethod.customerDTO.customerId === this.customerId);
    })
  }

  loadCustomerDetails() {
    this.customerService.getCustomerById(this.customerId).subscribe((customer) => {
      this.customerFirstName = customer.firstName;  
      this.customerLastName = customer.lastName;    
    });
  }

  openDeleteDialog(id: number) {
    this.paymentMethodIdToDelete = id;
    this.showDeleteDialog = true;
  }

  deletePaymentMethodById(id: number) {
    this.paymentMethodService.deletePaymentMethodById(id).subscribe(() => {
      this.loadAllPaymentMethods();
      this.showDeleteDialog = false;
    })
  }

  cancel() {
    this.showDeleteDialog = false;
  }

  toggleAddPaymentMethod() {
    const addDialog = this.dialog.open(AddPaymentMethodComponent, {
      width: '550px'
    });

    addDialog.afterClosed().subscribe((res) => {
      if (res) {
        const newPaymentMethod = {
          ...res, 
          customerDTO: {
            customerId: this.customerId
          }
        };

        this.paymentMethodService.addPaymentMethod(newPaymentMethod).subscribe(() => {
          const successfulMessage = this.dialog.open(AddPaymentMethodDialogComponent, {
            width: '400px', height: '200px'
          });

          successfulMessage.afterClosed().subscribe(() => {
            this.loadAllPaymentMethods();
          })
        });
      }
    });
  }

  toggleUpdatePaymentMethod(paymentMethodId: number) {
    const dialogRef = this.dialog.open(UpdatePaymentMethodComponent, {
      width: '550px',
      data: { paymentMethodId }
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        const updatedPaymentMethod = {
          ...res,
          customerDTO: {
            customerId: this.customerId
          }
        };

        this.paymentMethodService.updatePaymentMethod(updatedPaymentMethod).subscribe(() => {
          const successfulMessage = this.dialog.open(UpdatePaymentMethodDialogComponent, {
            width: '400px', height: '200px'
          });

          successfulMessage.afterClosed().subscribe(() => {
            this.loadAllPaymentMethods();
          });
        });
      }
    });
  }

}
