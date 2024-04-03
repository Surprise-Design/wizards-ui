import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzAlertModule } from 'ng-zorro-antd/alert';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NzFormModule,
    NzAlertModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  selector: 'wiz-error-message',
  templateUrl: './error-message.component.html',
})

export class WizardsErrorMessageComponent {
  @Input() message!: string;
  @Input() type: 'success' | 'info' | 'warning' | 'error' = 'error';
}
