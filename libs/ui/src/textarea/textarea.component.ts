import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ControlContainer, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NzFormModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  selector: 'wiz-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})

export class WizardsTextareaComponent {
  @Input() label!: string;
  @Input() controlName!: string;
  @Input() required = false;
  @Input() disabled = false;
  @Input() minRows!: number;
  @Input() maxRows!: number;
  @Input() placeholder = '';
  @Input() rows!: number;
  @Input() maxCharacters!: number;
  constructor(public controlContainer: ControlContainer) { }
}
