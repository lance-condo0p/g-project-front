import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'app-frame',
  standalone: true,
  imports: [],
  templateUrl: './frame.component.html',
  styleUrl: './frame.component.css',
})
export class FrameComponent {
  @HostBinding('style.width.px') @Input() width = 300;
  @HostBinding('style.height.px') @Input() height = 200;
}
