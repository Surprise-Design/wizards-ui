import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

export interface SelectOptions {
  label: string | number;
  value: string | boolean | number;
}

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  selector: 'wiz-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss']
})

export class SelectInputComponent {
  @Input() allowClear = false;
  @Input() allowSearch = false;
  @Input() controlName!: string;
  @Input() disabled = false;
  @Input() label!: string;
  @Input() mode: 'multiple' | 'tags' | 'default' = 'default';
  @Input() options: SelectOptions[] = [];
  @Input() placeholder = '';
  @Input() required = false;
  @Input() showArrow = true;
  @Output() changed = new EventEmitter();

  constructor(public controlContainer: ControlContainer) { }

  onChangeEmitter(event: any): void {
    this.changed.emit(event);
  }
}
