import { moduleMetadata, Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WizardsInputNumberComponent } from './input-number.component'
import { NzIconModule } from 'ng-zorro-antd/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const form = new FormGroup({
  text: new FormControl(null),
});

export default {
  title: 'InputNumber',
  component: WizardsInputNumberComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, ReactiveFormsModule, WizardsInputNumberComponent, NzIconModule, BrowserAnimationsModule],
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
      description: 'Set class full-width which set width 100% for number input',
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
    max: {
      description: 'Maximal number of input',
      control: {
        type: 'number',
      },
      table: {
        type: { summary: 'number' },
      },
    },
    min: {
      description: 'Minimal number of input',
      control: {
        type: 'number',
      },
      table: {
        type: { summary: 'number' },
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
    precision: {
      description: 'Precision of input value',
      control: {
        type: 'number',
      },
      table: {
        type: { summary: 'number' },
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
    step: {
      description: 'The number to which the current value is increased or decreased',
      control: {
        type: 'number',
      },
      table: {
        type: { summary: 'number' },
      },
    },
  },
} as Meta<WizardsInputNumberComponent>;

const Template: Story<WizardsInputNumberComponent> = (args: WizardsInputNumberComponent) => {
    return {
      template: `
        <wiz-input-number
          [label]="label"
          controlName="text"
          [required]="required"
          [disabled]="disabled"
          [allowSearch]="allowSearch"
          [min]="min"
          [max]="max"
          [step]="step"
          [precision]="precision"
          [placeholder]="placeholder"
          [fullWidth]="fullWidth">
        </wiz-input-number>
      `,
      props: args,
    };
  };

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  fullWidth: true,
  label: 'testowanie labela',
  max: 100000000,
  min: 0,
  placeholder: 'placeholder',
  precision: 2,
  required: false,
  step: 1,
};
