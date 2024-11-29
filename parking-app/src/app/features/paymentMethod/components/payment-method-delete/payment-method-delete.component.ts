import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-payment-method-delete',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './payment-method-delete.component.html',
  styleUrl: './payment-method-delete.component.css'
})
export class PaymentMethodDeleteComponent {

  @Input() paymentMethodId: number | undefined;

  @Output() delete = new EventEmitter<number>();
  @Output() cancelDelete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit(this.paymentMethodId);
  }

  cancel() {
    this.cancelDelete.emit();
  }

}
