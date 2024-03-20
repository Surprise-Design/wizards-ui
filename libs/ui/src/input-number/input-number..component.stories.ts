import { moduleMetadata, Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WizardsInputNumberComponent } from './input-number.component'
import { NzIconModule } from 'ng-zorro-antd/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const form = new FormGroup({
  text: new FormControl(null),
});

export default {
  title: 'WizardsInputNumberComponent',
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
  label: 'testowanie labela',
  required: false,
  disabled: false,
  min: 0,
  max: 100000000,
  step: 1,
  precision: 2,
  placeholder: 'placeholder',
  fullWidth: true,
};