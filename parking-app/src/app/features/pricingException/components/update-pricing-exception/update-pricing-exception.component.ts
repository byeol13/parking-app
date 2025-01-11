import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatOptionModule, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PricingExceptionService } from '../../service/pricing-exception.service';

@Component({
  selector: 'app-update-pricing-exception',
  standalone: true,
  imports: [MatTableModule, MatCardModule, CommonModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatOptionModule, MatSelectModule, ReactiveFormsModule, MatInputModule, MatNativeDateModule, MatDatepickerModule],
  templateUrl: './update-pricing-exception.component.html',
  styleUrl: './update-pricing-exception.component.css'
})
export class UpdatePricingExceptionComponent implements OnInit{

  editPricingExceptionForm: FormGroup;

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<UpdatePricingExceptionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {pricingExceptionId: number},
    private pricingExceptionService: PricingExceptionService
  ){
    this.editPricingExceptionForm = this.fb.group({
      id: [{value: '', disabled: true}],
      date: ['', Validators.required],
      morningHrCost: ['', Validators.required],
      middayHrCost: ['', Validators.required],
      eveningHrCost: ['', Validators.required],
      allDayCost: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.data.pricingExceptionId) {
      this.pricingExceptionService.getPricingExceptionById(this.data.pricingExceptionId).subscribe((res) => {
        if (res) {
          this.editPricingExceptionForm.patchValue({
            id: res.pricingExceptionId,
            date: res.date,
            morningHrCost: res.morningHrCost,
            middayHrCost: res.middayHrCost,
            eveningHrCost: res.eveningHrCost,
            allDayCost: res.allDayCost
          });
        }
      });
    }
  }

  onSubmit() {
    if(this.editPricingExceptionForm.valid) {
      const updatedPricingException = {
        pricingExceptionId: this.data.pricingExceptionId,
        date: this.editPricingExceptionForm.get('date')?.value,
        morningHrCost: this.editPricingExceptionForm.get('morningHrCost')?.value,
        middayHrCost: this.editPricingExceptionForm.get('middayHrCost')?.value,
        eveningHrCost: this.editPricingExceptionForm.get('eveningHrCost')?.value,
        allDayCost: this.editPricingExceptionForm.get('allDayCost')?.value
      };

      this.dialogRef.close(updatedPricingException);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
