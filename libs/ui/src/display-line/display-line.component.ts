import { CommonModule } from '@angular/common';
import { Component, Input, signal, effect, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NzButtonModule,
    NzIconModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  selector: 'wiz-display-line',
  templateUrl: './display-line.component.html',
  styleUrls: ['./display-line.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class WizardsDisplayLineComponent {
  @Input() firstValue!: string | number | null | undefined;
  @Input() label!: string | number;
  @Input() secondValue?: string | number | null | undefined;
  @Input() isBasicDisplay = true;
  @Input() isEdit = false;
  editing = signal<boolean>(false);
  isHovered = signal<boolean>(false);

  get additionalValue(): string {
    if (!this.firstValue && this.isBasicDisplay) return '-';
    if (!this.firstValue && !this.isBasicDisplay && this.firstValue !== 0) return 'Brak danych';
    if (!this.secondValue) {
      return `${this.firstValue}`;
    }
    return `${this.firstValue} ${this.secondValue}`;
  }

  valueExist(value: string | number | null | undefined): boolean {
    return value !== null && value !== undefined && value !== '';
  }

  get shouldDisplayAdditionalValue(): boolean {
    return this.valueExist(this.firstValue) || this.valueExist(this.secondValue);
  }

  startEditing() {
    this.editing.set(!this.editing());
    this.isHovered.set(false);
  }

  toggleHover() {
    this.isHovered.set(!this.isHovered());
  }

  showButton = effect(() => {this.isHovered() && !this.editing()});
}
