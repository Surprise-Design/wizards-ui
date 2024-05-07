import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NzButtonModule,
    NzBreadCrumbModule,
    NzIconModule,
    NzFormModule,
    NzPageHeaderModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
  ],
  selector: 'wiz-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})

export class WizardsBreadcrumbsComponent implements OnInit {
  @Input() firstBreadcrumb?: string;
  @Input() firstBreadcrumbLink?: string;
  @Input() fourthBreadcrumb?: string;
  @Input() fourthBreadcrumbLink?: string;
  @Input() mainTitle?: string;
  @Input() mainIcon!: string;
  @Input() secondBreadcrumb?: string;
  @Input() secondBreadcrumbLink?: string;
  @Input() thirdBreadcrumb?: string;
  @Input() thirdBreadcrumbLink?: string;
  @Input() subTitle?: string;
  breadcrumbs: { label: string | undefined; link: string | undefined }[] = [];

  ngOnInit(): void {
    this.breadcrumbs = [
      { label: this.firstBreadcrumb, link: this.firstBreadcrumbLink },
      { label: this.secondBreadcrumb, link: this.secondBreadcrumbLink },
      { label: this.thirdBreadcrumb, link: this.thirdBreadcrumbLink },
      { label: this.fourthBreadcrumb, link: this.fourthBreadcrumbLink },
    ];
  }
}
