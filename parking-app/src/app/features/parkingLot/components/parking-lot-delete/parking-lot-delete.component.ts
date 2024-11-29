import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-parking-lot-delete',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './parking-lot-delete.component.html',
  styleUrl: './parking-lot-delete.component.css'
})
export class ParkingLotDeleteComponent {

  @Input() parkingLotId: number | undefined;

  @Output() delete = new EventEmitter<number>();
  @Output() cancelDelete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit(this.parkingLotId);
  }

  cancel() {
    this.cancelDelete.emit();
  }
}
