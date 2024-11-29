import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-offers-delete',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './offers-delete.component.html',
  styleUrl: './offers-delete.component.css'
})
export class OffersDeleteComponent {

  @Input() offerId: number | undefined;

  @Output() delete = new EventEmitter<number>();
  @Output() cancelDelete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit(this.offerId);
  }

  cancel() {
    this.cancelDelete.emit();
  }

}
