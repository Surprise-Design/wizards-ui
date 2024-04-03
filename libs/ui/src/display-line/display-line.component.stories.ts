import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WizardsDisplayLineComponent } from './display-line.component'

export default {
  title: 'Display-line',
  component: WizardsDisplayLineComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, ReactiveFormsModule, WizardsDisplayLineComponent],
    }),
  ],
} as Meta<WizardsDisplayLineComponent>;

const Template: Story<WizardsDisplayLineComponent> = (args: WizardsDisplayLineComponent) => {
    return {
      template: `
        <wiz-display-line
          [label]="label"
          [firstValue]="firstValue"
          [secondValue]="secondValue">
        </wiz-display-line>
      `,
      props: args,
    };
  };

export const Primary = Template.bind({});
Primary.args = {
  firstValue: 'Pierwsza',
  isBasicDisplay: true,
  label: 'Label',
  secondValue: 'Wartość',
};

