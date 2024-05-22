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
  tags: ['autodocs'],
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
    argTypes: {
      isBasicDisplay: {
        description: 'It changes label size and colour to black',
      },
      isEdit: {
        description: 'After enable it you can add ng-content inside'
      }
    },
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
          <dd additional-content>
          <strong style="font-size: 18px; color: #87d068">Additional content</strong>
        </dd>
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

