import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputTextComponent, SelectInputComponent } from '@wizards-ui/ui'
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  standalone: true,
  imports: [RouterModule, InputTextComponent, ReactiveFormsModule, SelectInputComponent, NzIconModule, FormsModule],
  selector: 'wizards-ui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  options = testOptions;
  title = 'wizards-ui';
  form = new FormGroup({
    test: new FormControl<string>('1'),
    testSelect: new FormControl<string | null>(null)
  })
}

export const testOptions: any[] = [
  {
    label: 'Tak',
    value: 'yes',
  },
  {
    label: 'Nie',
    value: 'no',
  },
];
