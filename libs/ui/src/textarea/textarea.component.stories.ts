import { moduleMetadata, Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { WizardsTextareaComponent } from './textarea.component'

const form = new FormGroup({
  text: new FormControl(null),
});

export default {
  title: 'Textarea',
  component: WizardsTextareaComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, ReactiveFormsModule, WizardsTextareaComponent, NzIconModule],
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
    label: {
      description: 'Main title',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
      },
    },
    maxCharacters: {
      description: 'Maximal number of characters in input',
      control: {
        type: 'number',
      },
      table: {
        type: { summary: 'number' },
      },
    },
    maxRows: {
      description: 'Maximal number of textarea rows',
      control: {
        type: 'number',
      },
      table: {
        type: { summary: 'number' },
      },
    },
    minRows: {
      description: 'Minimal number of textarea rows',
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
    required: {
      description: 'Set input to required',
      control: {
        type: 'boolean',
      },
      table: {
        type: { summary: 'boolean' },
      },
    },
    rows: {
      description: 'Number of default textarea rows',
      control: {
        type: 'number',
      },
      table: {
        type: { summary: 'number' },
      },
    },
  },
} as Meta<WizardsTextareaComponent>;

const Template: Story<WizardsTextareaComponent> = (args: WizardsTextareaComponent) => {
    return {
      template: `
        <wiz-textarea
          [label]="label"
          controlName="text"
          disabled="disabled"
          [required]="required"
          [placeholder]="placeholder"
          [minRows]="minRows"
          [maxRows]="maxRows"
          [rows]="rows"
          [maxCharacters]="maxCharacters">
        </wiz-textarea>
      `,
      props: args,
    };
  };

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  label: 'Label',
  maxCharacters: 10000,
  maxRows: 4,
  minRows: 2,
  placeholder: 'placeholder',
  required: false,
  rows: 3,
};

