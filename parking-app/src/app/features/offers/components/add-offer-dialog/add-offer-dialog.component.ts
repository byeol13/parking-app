import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-add-offer-dialog',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './add-offer-dialog.component.html',
  styleUrl: './add-offer-dialog.component.css'
})
export class AddOfferDialogComponent {

  constructor(private dialogRef: MatDialogRef<AddOfferDialogComponent>){}
  
    onConfirm() {
      this.dialogRef.close('confirm');
    }
  
    onCancel() {
      this.dialogRef.close('cancel');
    }
}
