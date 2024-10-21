import {Component} from '@angular/core';
import {MatFabButton} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule} from '@angular/common';

import {AudioRecorderService} from '../audio-recorder.service';

@Component({
  selector: 'app-record-button',
  standalone: true,
  imports: [
    MatFabButton,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './record-button.component.html',
  styleUrl: './record-button.component.css'
})
export class RecordButtonComponent {
  constructor(private recordService: AudioRecorderService) {}

  get isRecording(): boolean {
    return this.recordService.isRecording;
  }

  async toggleRecording(): Promise<void> {
    if (this.isRecording) {
      await this.startRecording();
    } else {
      await this.stopRecording();
    }
  }

  async startRecording(): Promise<void> {
    await this.recordService.startRecording();
  }

  async stopRecording(): Promise<void> {
    const record = await this.recordService.stopRecording();
    console.log(record);
  }
}
