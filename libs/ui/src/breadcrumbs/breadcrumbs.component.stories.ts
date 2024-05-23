import { moduleMetadata, Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WizardsBreadcrumbsComponent } from './breadcrumbs.component'
import { WizardsInputComponent } from '../input-text/input-text.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { NzButtonModule } from 'ng-zorro-antd/button';

class MockActivatedRoute {
  queryParams = of({});
}

export default {
  title: 'Breadcrumbs',
  component: WizardsBreadcrumbsComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [FormsModule, NzButtonModule, NzIconModule, ReactiveFormsModule, WizardsBreadcrumbsComponent, RouterModule, HttpClientModule, BrowserAnimationsModule],
      providers: [
        { provide: ActivatedRoute, useClass: MockActivatedRoute }
      ],
    }),
  ],
  argTypes: {
    breadcrumbs: {
      description: 'An array of objects containing label and link',
      control: {
        type: 'object',
      },
      table: {
        type: { summary: 'Array<{ label: string; link: string }>' },
      },
    },
    mainIcon: {
      description: 'Main icon for Title of breadcrumbs',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
      },
    },
    mainTitle: {
      description: 'Main Title under breadcrumbs',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
      },
    },
    subTitle: {
      description: 'Gray subtitle next to the title',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
      },
    },
  },
  args: {
    breadcrumbs: [],
    mainIcon: 'info-circle',
    mainTitle: 'Main title',
    subTitle: 'Sub title',
  },
} as Meta<WizardsBreadcrumbsComponent>;

const Template: Story<WizardsBreadcrumbsComponent> = (args: WizardsBreadcrumbsComponent) => {
    return {
      template: `
        <wiz-breadcrumbs
        [breadcrumbs]="breadcrumbs"
        [mainIcon]="mainIcon"
        [mainTitle]="mainTitle"
        [subTitle]="subTitle">
        <button nz-button nzType="default">
          <span nz-icon nzType="edit" nzTheme="outline"></span>
        </button>
        </wiz-breadcrumbs>
      `,
      props: args,
    };
  };

export const Primary = Template.bind({});
Primary.args = {
  breadcrumbs: [
    { label: 'Jeden', link: '/test1' },
    { label: 'Dwa', link: '/test2' },
    { label: 'Trzy', link: '/test3' },
    { label: 'Cztery', link: '/test4' }
  ],
  mainIcon: 'info-circle',
  mainTitle: 'Testowy nagłówek',
  subTitle: 'Zarządzaj breadcrumbami',
};

