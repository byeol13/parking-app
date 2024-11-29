import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-customer-delete',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './customer-delete.component.html',
  styleUrl: './customer-delete.component.css'
})
export class CustomerDeleteComponent {

  @Input() customerId: number | undefined;

  @Output() delete = new EventEmitter<number>();
  @Output() cancelDelete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit(this.customerId);
  }

  cancel() {
    this.cancelDelete.emit();
  }

}
