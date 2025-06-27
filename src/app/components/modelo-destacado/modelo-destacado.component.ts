import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modelo-destacado',
  imports: [CommonModule],
  templateUrl: './modelo-destacado.component.html',
  styleUrl: './modelo-destacado.component.css'
})
export class ModeloDestacadoComponent {
  @Input() titulo: string = '';
  @Input() descripcion: string = '';
  @Input() imagenUrl: string = '';
}