import { moduleMetadata, Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { WizardsTextareaComponent } from './textarea.component'

const form = new FormGroup({
  text: new FormControl(null),
});

export default {
  title: 'WizardsTextareaComponent',
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
  placeholder: 'placeholder',
  required: false,
  minRows: 4,
  maxRows: 6,
  rows: 5,
  maxCharacters: 10000,
};

