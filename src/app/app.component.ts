import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CenteredComponent} from "./centered/centered.component";
import {RecordButtonComponent} from "./record-button/record-button.component";
import {RecognizedTextComponent} from "./recognized-text/recognized-text.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CenteredComponent, RecordButtonComponent, RecognizedTextComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'g-project';
}
