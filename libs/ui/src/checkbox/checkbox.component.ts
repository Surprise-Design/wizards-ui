import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCheckboxComponent } from 'ng-zorro-antd/checkbox';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NzCheckboxComponent,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  selector: 'wiz-checkbox',
  templateUrl: './checkbox.component.html',
})

export class WizardsCheckboxComponent {
  @Input() label!: string;
  @Input() ngModel?: string;
  @Input() controlName?: string | null;
  @Input() disabled = false;
  @Output() changed = new EventEmitter();
  constructor(public controlContainer: ControlContainer) { }

  onChangeEmitter(event: any): void {
    this.changed.emit(event);
  }
}
