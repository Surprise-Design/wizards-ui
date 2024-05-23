import { moduleMetadata, Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WizardsSelectComponent } from './select-input.component'
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
  title: 'SelectInput',
  component: WizardsSelectComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, ReactiveFormsModule, WizardsSelectComponent, NzIconModule, BrowserAnimationsModule],
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
  argTypes: {
    allowClear: {
      description: 'Show clear button',
      control: {
        type: 'boolean',
      },
      table: {
        type: { summary: 'boolean' },
      },
    },
    allowSearch: {
      description: 'Allows search input',
      control: {
        type: 'boolean',
      },
      table: {
        type: { summary: 'boolean' },
      },
    },
    disabled: {
      description: 'Disable input',
      control: {
        type: 'boolean',
      },
      table: {
        type: { summary: 'boolean' },
      },
    },
    fullWidth: {
      description: 'Set class full-width which set width 100% for input',
      control: {
        type: 'boolean',
      },
      table: {
        type: { summary: 'boolean' },
      },
    },
    label: {
      description: 'Main title',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
      },
    },
    mode: {
      description: 'Mode of select',
      control: 'select',
      options: ['multiple', 'tags', 'default']
    },
    options: {
      description: 'An array of objects containing label and value',
      control: {
        type: 'object',
      },
      table: {
        type: { summary: 'Array<{ label: string | number; value: string | number }>' },
      },
    },
    placeholder: {
      description: 'Placeholder of input',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
      },
    },
    required: {
      description: 'Set input to required',
      control: {
        type: 'boolean',
      },
      table: {
        type: { summary: 'boolean' },
      },
    },
    showArrow: {
      description: 'Show the drop-down arrow',
      control: {
        type: 'boolean',
      },
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
} as Meta<WizardsSelectComponent>;

const Template: Story<WizardsSelectComponent> = (args: WizardsSelectComponent) => {
    return {
      template: `
        <wiz-select-input
          [label]="label"
          controlName="text"
          [required]="required"
          [allowClear]="allowClear"
          [fullWidth]="fullWidth"
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
  fullWidth: true,
  label: 'Label',
  mode: 'default',
  options: sampleOptions,
  placeholder: 'placeholder',
  required: false,
  showArrow: true,
};
