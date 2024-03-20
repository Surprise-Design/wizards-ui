import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

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

export class WizardsSelectComponent {
  @Input() allowClear = false;
  @Input() allowSearch = false;
  @Input() controlName!: string;
  @Input() disabled = false;
  @Input() label!: string;
  @Input() mode: 'multiple' | 'tags' | 'default' = 'default';
  @Input() options: any[] = [];
  @Input() placeholder!: string;
  @Input() required = false;
  @Input() showArrow = true;
  @Output() changed = new EventEmitter();

  constructor(public controlContainer: ControlContainer) { }

  onChangeEmitter(event: any): void {
    this.changed.emit(event);
  }
}
