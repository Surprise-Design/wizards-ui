import { moduleMetadata, Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WizardsDatepickerComponent } from './datepicker.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeZh from '@angular/common/locales/zh'
import { NZ_DATE_LOCALE, NZ_I18N, pl_PL } from 'ng-zorro-antd/i18n';
import { pl as PL } from 'date-fns/locale';

registerLocaleData(localeZh);

const form = new FormGroup({
  text: new FormControl(null),
});

export default {
  title: 'Datepicker',
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
  dateFormat: 'dd.MM.yyy',
  disabled: false,
  fullWidth: true,
  label: 'Testowanie datepickera',
  nzDisabledDate: (current: Date): boolean => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    return current.getTime() < currentDate.getTime();
  },
  required: false,
};
