import { Component } from '@angular/core';
import { CarLightComponent } from '../app/components/car-light/car-light.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CarLightComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '3dCars';
}
