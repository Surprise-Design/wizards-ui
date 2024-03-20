import { moduleMetadata, Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WizardsDatepickerComponent } from './datepicker.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { CommonModule, registerLocaleData } from '@angular/common';
import pl from '@angular/common/locales/pl'
import { NZ_DATE_LOCALE, NZ_I18N, pl_PL } from 'ng-zorro-antd/i18n';
import { pl as PL } from 'date-fns/locale';

registerLocaleData(pl);

const form = new FormGroup({
  text: new FormControl(null),
});

export default {
  title: 'WizardsDatepickerComponent',
  component: WizardsDatepickerComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, ReactiveFormsModule, WizardsDatepickerComponent, NzIconModule, BrowserAnimationsModule, NzDatePickerModule, CommonModule],
      providers: [
        { provide: NZ_DATE_LOCALE, useValue: 'pl-PL' },
        { provide: NZ_I18N, useValue: pl_PL },
        { provide: NZ_DATE_LOCALE, useValue: PL },
      ]
    }),
    componentWrapperDecorator(
      (story) => `
      <div [formGroup]="form">
        ${story}
      </div>
    `,
      {
        form: form,
      },
    ),
  ],
} as Meta<WizardsDatepickerComponent>;

const Template: Story<WizardsDatepickerComponent> = (args: WizardsDatepickerComponent) => {
    return {
      template: `
      <wiz-datepicker
      [label]="label"
      controlName="text"
      [disabled]="disabled"
      [required]="required"
      [fullWidth]="fullWidth"
      [dateFormat]="dateFormat"
      [nzDisabledDate]="disabledDate">
    </wiz-datepicker>
      `,
      props: args,
    };
  };

export const Primary = Template.bind({});
Primary.args = {
  label: 'Testowanie datepickera',
  dateFormat: 'dd.MM.yyy',
  required: false,
  disabled: false,
  fullWidth: true,
  nzDisabledDate: (current: Date): boolean => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    return current.getTime() < currentDate.getTime();
  },
};