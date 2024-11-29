import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-parking-monthly-pass-delete',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './parking-monthly-pass-delete.component.html',
  styleUrl: './parking-monthly-pass-delete.component.css'
})
export class ParkingMonthlyPassDeleteComponent {

  @Input() monthlyPassId: number | undefined;

  @Output() delete = new EventEmitter<number>();
  @Output() cancelDelete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit(this.monthlyPassId);
  }

  cancel() {
    this.cancelDelete.emit();
  }
}
