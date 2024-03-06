import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputTextComponent } from '@wizards-ui/ui'

@Component({
  standalone: true,
  imports: [RouterModule, InputTextComponent, ReactiveFormsModule],
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
