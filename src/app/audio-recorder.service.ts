import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioRecorderService {
  private currentRecord: Blob[] | null = null;
  private streamBeingCaptured: MediaStream | null = null;
  private mediaRecorder: MediaRecorder | null = null;
  private isRecordingInProgress = false;

  constructor() {
  }

  async startRecording(): Promise<void> {
    if (this.isRecordingInProgress) {
      return;
    }
    if (!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
      throw new Error('mediaDevices API or getUserMedia method is not supported in this browser.');
    } else {
      this.isRecordingInProgress = true;
      this.streamBeingCaptured = await navigator.mediaDevices.getUserMedia({audio: true});
      this.mediaRecorder = new MediaRecorder(this.streamBeingCaptured);
      this.currentRecord = [];
      this.mediaRecorder.addEventListener('dataavailable', (event) => {
        this.currentRecord?.push(event.data);
      });
      this.mediaRecorder.start();
    }
  }

  stopRecording(): Promise<void> {
    if (!this.isRecordingInProgress) {
      return;
    }

    return new Promise(resolve => {
      let mimeType = this.mediaRecorder?.mimeType;
      this.mediaRecorder?.addEventListener('stop', () => {
        let audioBlob = new Blob(this.currentRecord, {type: mimeType});
        resolve(audioBlob);
      });

      this.mediaRecorder?.stop();
      this.streamBeingCaptured?.getTracks()
        .forEach((track) => track.stop());
      this.mediaRecorder = null;
      this.streamBeingCaptured = null;
    });
  }
}
