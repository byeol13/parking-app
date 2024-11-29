import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-parking-one-time-res-delete',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './parking-one-time-res-delete.component.html',
  styleUrl: './parking-one-time-res-delete.component.css'
})
export class ParkingOneTimeResDeleteComponent {

  @Input() oneTimeResId: number | undefined;

  @Output() delete = new EventEmitter<number>();
  @Output() cancelDelete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit(this.oneTimeResId);
  }

  cancel() {
    this.cancelDelete.emit();
  }
}
