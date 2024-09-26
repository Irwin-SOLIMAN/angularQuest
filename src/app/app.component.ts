import { Component } from '@angular/core';
import { cardComponent } from "../card/card.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [cardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Net-Flix Movie';
}

