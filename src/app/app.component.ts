import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    NavComponent,
    RouterModule
  ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-update-demo';
}
