import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-light',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-light.component.html',
  styleUrls: ['./car-light.component.css']
})
export class CarLightComponent {
  @Output() animationDone = new EventEmitter<void>();

  visible = true;

  ngOnInit() {
    // Espera el tiempo de la animación (4s por ejemplo), luego emite evento
    setTimeout(() => {
      this.visible = false;
      this.animationDone.emit();
    }, 4000);
  }
}