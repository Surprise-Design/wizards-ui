import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  selector: 'wiz-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})

export class WizardsInputNumberComponent {
  @Input() label!: string;
  @Input() controlName!: string;
  @Input() required = false;
  @Input() disabled = false;
  @Input() min!: number;
  @Input() max!: number;
  @Input() step = 1;
  @Input() placeholder!: string;
  @Input() precision = 2;
  @Input() fullWidth = true;
  @Output() changed = new EventEmitter();

  constructor(public controlContainer: ControlContainer) { }

  onChangeEmitter(): void {
    this.changed.emit();
  }
}
