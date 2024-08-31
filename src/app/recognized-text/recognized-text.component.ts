import { Component } from '@angular/core';
import {FrameComponent} from "../frame/frame.component";

@Component({
  selector: 'app-recognized-text',
  standalone: true,
    imports: [
        FrameComponent
    ],
  templateUrl: './recognized-text.component.html',
  styleUrl: './recognized-text.component.css'
})
export class RecognizedTextComponent {

}
