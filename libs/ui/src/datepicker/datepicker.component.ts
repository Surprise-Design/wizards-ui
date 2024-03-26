import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ControlContainer, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { pl_PL } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import pl from '@angular/common/locales/pl';
registerLocaleData(pl);

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NzDatePickerModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  selector: 'wiz-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})

export class WizardsDatepickerComponent {
  @Input() label!: string;
  @Input() controlName!: string;
  @Input() dateFormat = 'dd.MM.yyyy';
  @Input() required = false;
  @Input() disabled = false;
  @Input() fullWidth = true;
  @Input() locale = pl_PL;
  @Input() nzDisabledDate: ((current: Date) => boolean) | void | string | number | undefined;
  constructor(public controlContainer: ControlContainer) {}
}
