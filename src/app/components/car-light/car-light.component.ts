import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-light',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-light.component.html',
  styleUrls: ['./car-light.component.css']
})
export class CarLightComponent {
  visible = true;

  constructor() {
    setTimeout(() => {
      this.visible = false;
    }, 4000);
  }
}
