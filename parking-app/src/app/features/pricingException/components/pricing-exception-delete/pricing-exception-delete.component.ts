import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-pricing-exception-delete',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './pricing-exception-delete.component.html',
  styleUrl: './pricing-exception-delete.component.css'
})
export class PricingExceptionDeleteComponent {

  @Input() pricingExceptionId: number | undefined;

  @Output() delete = new EventEmitter<number>();
  @Output() cancelDelete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit(this.pricingExceptionId);
  }

  cancel() {
    this.cancelDelete.emit();
  }
}
