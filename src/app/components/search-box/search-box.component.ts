import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mh-search-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent {
  @Output() submit = new EventEmitter<string>();
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;

  onSubmit() {
    const value = this.input?.nativeElement?.value?.trim();
    if (value) this.submit.emit(value);
  }
}
