import { moduleMetadata, Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WizardsInputComponent } from './input-text.component';
import { NzIconModule } from 'ng-zorro-antd/icon';

const form = new FormGroup({
  text: new FormControl(null),
});

export default {
  title: 'Input',
  component: WizardsInputComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, ReactiveFormsModule, WizardsInputComponent, NzIconModule],
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
} as Meta<WizardsInputComponent>;

const Template: Story<WizardsInputComponent> = (args: WizardsInputComponent) => {
    return {
      template: `
        <wiz-input-text
          [label]="label"
          controlName="text"
          disabled="disabled"
          [required]="required"
          [type]="type"
          [placeholder]="placeholder"
          [prefix]="prefix"
          [suffix]="suffix"
          [fullWidth]="fullWidth"
          [errorIfEmail]="errorIfEmail"
          [errorIfShort]="errorIfShort"
          [errorIfToLong]="errorIfToLong">
          <ng-template #suffix>
            <span nz-icon nzType="info-circle"></span>
          </ng-template>
        </wiz-input-text>
      `,
      props: args,
    };
  };

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  errorIfEmail: true,
  errorIfShort: 2,
  errorIfToLong: 8,
  fullWidth: false,
  label: 'Label',
  placeholder: 'placeholder',
  prefix: "prefix",
  required: false,
  suffix: "suffix",
  type: "text",
};

