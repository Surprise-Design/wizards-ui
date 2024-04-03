import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  selector: 'wiz-display-line',
  templateUrl: './display-line.component.html',
  styleUrls: ['./display-line.component.scss']
})

export class WizardsDisplayLineComponent {
  @Input() firstValue!: string | number;
  @Input() label!: string | number;
  @Input() secondValue?: string | number;
  @Input() isBasicDisplay = true;

  get additionalValue(): string {
    if (!this.firstValue && this.isBasicDisplay) return '-';
    if (!this.firstValue && !this.isBasicDisplay && this.firstValue !== 0) return 'Brak danych';
    if (!this.secondValue) {
      return `${this.firstValue}`;
    }
    return `${this.firstValue} ${this.secondValue}`;
  }
}
