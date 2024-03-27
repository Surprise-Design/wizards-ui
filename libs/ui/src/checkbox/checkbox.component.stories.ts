import { moduleMetadata, Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WizardsCheckboxComponent } from './checkbox.component';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

const form = new FormGroup({
  text: new FormControl(null),
});

export default {
  title: 'Checkbox',
  component: WizardsCheckboxComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, ReactiveFormsModule, WizardsCheckboxComponent, NzIconModule, BrowserAnimationsModule, NzCheckboxModule],
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
} as Meta<WizardsCheckboxComponent>;

const Template: Story<WizardsCheckboxComponent> = (args: WizardsCheckboxComponent) => {
    return {
      template: `
        <wiz-checkbox
          [label]="label"
          controlName="text"
          [disabled]="disabled">
        </wiz-checkbox>
      `,
      props: args,
    };
  };

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  label: 'Testowanie checkboxa',
  ngModel: '',
};
