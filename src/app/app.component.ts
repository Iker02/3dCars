import { Component } from '@angular/core';
import { CarLightComponent } from '../app/components/car-light/car-light.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CarLightComponent, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'LuxDrive';
  animationFinished = false;

  onAnimationDone() {
    this.animationFinished = true;
  }
}
