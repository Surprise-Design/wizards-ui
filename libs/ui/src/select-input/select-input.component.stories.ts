import { moduleMetadata, Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectInputComponent } from './select-input.component'
import { NzIconModule } from 'ng-zorro-antd/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const form = new FormGroup({
  text: new FormControl(null),
});

interface SelectOptions {
  label: string | number;
  value: string | boolean | number;
}

const sampleOptions: SelectOptions[] = [
  { value: 'accountancy', label: 'księgowość' },
  { value: 'hr', label: 'kadry' },
  { value: 'accountancy and hr', label: 'księgowość i kadry' },
];

export default {
  title: 'SelectInputComponent',
  component: SelectInputComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, ReactiveFormsModule, SelectInputComponent, NzIconModule, BrowserAnimationsModule],
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
} as Meta<SelectInputComponent>;

const Template: Story<SelectInputComponent> = (args: SelectInputComponent) => {
    return {
      template: `
        <wiz-select-input
          [label]="label"
          controlName="text"
          [required]="required"
          [allowClear]="allowClear"
          [disabled]="disabled"
          [allowSearch]="allowSearch"
          [mode]="mode"
          [options]="options"
          [placeholder]="placeholder"
          [showArrow]="showArrow">
        </wiz-select-input>
      `,
      props: args,
    };
  };

export const Primary = Template.bind({});
Primary.args = {
  allowClear: false,
  allowSearch: false,
  disabled: false,
  label: 'Label',
  mode: 'default',
  options: sampleOptions,
  placeholder: 'placeholder',
  required: false,
  showArrow: true,
};
