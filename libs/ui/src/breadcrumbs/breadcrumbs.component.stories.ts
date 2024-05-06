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
  decorators: [
    moduleMetadata({
      imports: [FormsModule, NzButtonModule, NzIconModule, ReactiveFormsModule, WizardsBreadcrumbsComponent, RouterModule, HttpClientModule, BrowserAnimationsModule],
      providers: [
        { provide: ActivatedRoute, useClass: MockActivatedRoute }
      ],
    }),
  ],
} as Meta<WizardsBreadcrumbsComponent>;

const Template: Story<WizardsBreadcrumbsComponent> = (args: WizardsBreadcrumbsComponent) => {
    return {
      template: `
        <wiz-breadcrumbs
        [firstBreadcrumb]="firstBreadcrumb"
        [firstBreadcrumbLink]="firstBreadcrumbLink"
        [fourthBreadcrumb]="fourthBreadcrumb"
        [fourthBreadcrumbLink]="fourthBreadcrumbLink"
        [mainIcon]="mainIcon"
        [mainTitle]="mainTitle"
        [secondBreadcrumb]="secondBreadcrumb"
        [secondBreadcrumbLink]="secondBreadcrumbLink"
        [thirdBreadcrumb]="thirdBreadcrumb"
        [thirdBreadcrumbLink]="thirdBreadcrumbLink"
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
  firstBreadcrumb: 'Jeden',
  firstBreadcrumbLink: '/test',
  fourthBreadcrumb: 'Cztery',
  fourthBreadcrumbLink: '/test4',
  mainIcon: 'info-circle',
  mainTitle: 'Testowy nagłówek',
  secondBreadcrumb: 'Dwa',
  secondBreadcrumbLink: '/test2',
  subTitle: 'Zarządzaj breadcrumbami',
  thirdBreadcrumb: 'Trzy',
  thirdBreadcrumbLink: '/test3',
};

