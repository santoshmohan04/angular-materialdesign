import { Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy } from '@angular/core';
import "@material/web/button/elevated-button";

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './timer.component.css'
})
export class TimerComponent implements OnDestroy {
  time = 0; // Time in milliseconds
  isRunning = false;
  private interval: any;

  startStop() {
    if (this.isRunning) {
      this.stop();
    } else {
      this.start();
    }
  }

  private start() {
    this.isRunning = true;
    this.interval = setInterval(() => {
      this.time += 10; // Increment time in milliseconds
    }, 10);
  }

  private stop() {
    this.isRunning = false;
    clearInterval(this.interval);
  }

  reset() {
    this.stop();
    this.time = 0;
  }

  formatTime(): string {
    const totalSeconds = Math.floor(this.time / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
  }

  private pad(num: number, size: number = 2): string {
    return num.toString().padStart(size, '0');
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
