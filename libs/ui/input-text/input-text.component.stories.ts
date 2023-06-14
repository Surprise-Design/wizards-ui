import { moduleMetadata, Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextComponent } from './input-text.component';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';

const form = new FormGroup({
  text: new FormControl(null),
});

export default {
  title: 'InputTextComponent',
  component: InputTextComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, ReactiveFormsModule, InputTextComponent, NzIconModule],
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
} as Meta<InputTextComponent>;

const Template: Story<InputTextComponent> = (args: InputTextComponent) => {
    return {
      template: `
        <ui-input-text
          [label]="label"
          controlName="text"
          disabled="disabled"
          [required]="required"
          [type]="type"
          [placeholder]="placeholder"
          [prefix]="prefix"
          [suffix]="suffix"
          [fullWidth]="fullWidth">
          <ng-template #suffix>
            <span nz-icon nzType="info-circle"></span>
          </ng-template>
        </ui-input-text>
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
  type: "number",
  prefix: "prefix",
  suffix: "suffix",
  fullWidth: false,
};

