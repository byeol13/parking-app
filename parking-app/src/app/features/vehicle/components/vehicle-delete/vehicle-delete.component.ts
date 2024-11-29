import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-vehicle-delete',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './vehicle-delete.component.html',
  styleUrl: './vehicle-delete.component.css'
})
export class VehicleDeleteComponent {

  @Input() vehicleId: number | undefined;

  @Output() delete = new EventEmitter<number>();
  @Output() cancelDelete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit(this.vehicleId);
  }

  cancel() {
    this.cancelDelete.emit();
  }
}
