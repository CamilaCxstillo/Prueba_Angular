import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mh-error-message',
  standalone: true,
  imports: [CommonModule],
  template: `<div *ngIf="message" class="alert alert-error my-2">{{ message }}</div>`
})
export class ErrorMessageComponent {
  @Input() message?: string | null;
}
