import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzPopoverModule } from 'ng-zorro-antd/popover';

export interface Statistic {
  value: {
    value: number | string;
    isMoney?: boolean;
  };
  info?: string;
  label: string;
  icon: string;
}

@Component({
  standalone: true,
  imports: [
    CommonModule,
    CurrencyPipe,
    FormsModule,
    NzCardModule,
    NzCarouselModule,
    NzIconModule,
    NzFormModule,
    NzPopoverModule,
    ReactiveFormsModule,
  ],
  selector: 'wiz-statistic-card',
  templateUrl: './statistic-card.component.html',
  styleUrls: ['./statistic-card.component.scss']
})

export class WizardsStatisticCardComponent {
  @Input() statisticTable: Statistic[] = [];

}
