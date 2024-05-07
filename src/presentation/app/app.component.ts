import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Professional } from '../../domain/professional/professional';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-form-with-state';

  professional: Professional = new Professional()

  canEditIban(): boolean {
    return this.professional.state.canEditIban();
  }
}
