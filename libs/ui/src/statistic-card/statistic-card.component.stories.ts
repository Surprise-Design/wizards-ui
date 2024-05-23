import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WizardsStatisticCardComponent } from './statistic-card.component'
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CurrencyPipe } from '@angular/common';

class MockActivatedRoute {
  queryParams = of({});
}

export default {
  title: 'Statistic-card',
  component: WizardsStatisticCardComponent,
  decorators: [
    moduleMetadata({
      imports: [CurrencyPipe, FormsModule, NzButtonModule, NzIconModule, ReactiveFormsModule, WizardsStatisticCardComponent, RouterModule, HttpClientModule, BrowserAnimationsModule],
      providers: [
        { provide: ActivatedRoute, useClass: MockActivatedRoute }
      ],
    }),
  ],
  argTypes: {
    statisticTable: {
      description: 'An array of objects containing value, info, label and icon',
      control: {
        type: 'object',
      },
      table: {
        type: { summary: 'Array<{ value: { value: number | string; isMoney?: boolean }, info?: string, label: string, icon: string }>' },
      },
    },
  }
} as Meta<WizardsStatisticCardComponent>;

const Template: Story<WizardsStatisticCardComponent> = (args: WizardsStatisticCardComponent) => {
    return {
      template: `
        <wiz-statistic-card
        [statisticTable]="statisticTable">
        </wiz-statistic-card>
      `,
      props: args,
    };
  };

export const Primary = Template.bind({});
Primary.args = {
  statisticTable: [
    { label: 'Testowy statistic-card', icon: 'up', value: { value: 'testowo 1', isMoney: false }},
    { label: 'Drugi Testowy statistic-card', icon: 'down', value: { value: 'TesttestTest', isMoney: false }},
    { label: 'Trzeci Testowy statistic-card', icon: 'left', value: { value: 'testowa druga kwota', isMoney: false }},
    { label: 'Czwarty Testowy statistic-card', icon: 'right', value: { value: 'testowo 2312', isMoney: false }},
  ],
};

