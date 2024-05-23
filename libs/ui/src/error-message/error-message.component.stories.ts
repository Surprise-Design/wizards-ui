import { moduleMetadata, Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { WizardsErrorMessageComponent } from './error-message.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const form = new FormGroup({
  text: new FormControl(null),
});

export default {
  title: 'Message',
  component: WizardsErrorMessageComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, ReactiveFormsModule, WizardsErrorMessageComponent, NzIconModule, BrowserAnimationsModule],
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
    message: {
      description: 'Message inside alert',
      control: 'text'

    },
    type: {
      description: 'Type of an message',
      control: 'select',
      options: ['success', 'info', 'warning', 'error']
    },
  },
  args: {
    message: 'Alert message',
    type: 'error',
  },
} as Meta<WizardsErrorMessageComponent>;

const Template: Story<WizardsErrorMessageComponent> = (args: WizardsErrorMessageComponent) => {
    return {
      template: `
        <wiz-error-message
          [type]="type"
          [message]="message">
        </wiz-error-message>
      `,
      props: args,
    };
  };

export const Primary = Template.bind({});
Primary.args = {
  message: 'To pole jest wymagane',
  type: 'error',
};

