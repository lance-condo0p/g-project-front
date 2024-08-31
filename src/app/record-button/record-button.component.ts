import {Component} from '@angular/core';
import {MatFabButton} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-record-button',
  standalone: true,
  imports: [
    MatFabButton,
    MatIconModule,
  ],
  templateUrl: './record-button.component.html',
  styleUrl: './record-button.component.css'
})
export class RecordButtonComponent {

}
