import { moduleMetadata, Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WizardsDisplayLineComponent } from './display-line.component'
import { WizardsInputComponent } from '../input-text/input-text.component';

const form = new FormGroup({
  text: new FormControl(null),
});

export default {
  title: 'Display-line',
  component: WizardsDisplayLineComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, ReactiveFormsModule, WizardsDisplayLineComponent, WizardsInputComponent],
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
} as Meta<WizardsDisplayLineComponent>;

const Template: Story<WizardsDisplayLineComponent> = (args: WizardsDisplayLineComponent) => {
    return {
      template: `
        <wiz-display-line
          [label]="label"
          [isEdit]="isEdit"
          [firstValue]="firstValue"
          [secondValue]="secondValue">
          <wiz-input-text controlName="text" [label]="label"></wiz-input-text>
        </wiz-display-line>
      `,
      props: args,
    };
  };

export const Primary = Template.bind({});
Primary.args = {
  firstValue: 'Pierwsza',
  isBasicDisplay: true,
  isEdit: false,
  label: 'Label',
  secondValue: 'Wartość',
};

