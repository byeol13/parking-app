import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-parking-pricing-delete',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './parking-pricing-delete.component.html',
  styleUrl: './parking-pricing-delete.component.css'
})
export class ParkingPricingDeleteComponent {

  @Input() parkingPricingId: number | undefined;

  @Output() delete = new EventEmitter<number>();
  @Output() cancelDelete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit(this.parkingPricingId);
  }

  cancel() {
    this.cancelDelete.emit();
  }

}
