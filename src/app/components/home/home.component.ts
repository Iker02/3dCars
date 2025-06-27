import { Component } from '@angular/core';
import { ModeloDestacadoComponent } from '../modelo-destacado/modelo-destacado.component';
import { CarBannerComponent } from "../car-banner/car-banner.component";
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [RouterModule, ModeloDestacadoComponent, CarBannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) {}

  redirectToModelTemplate() {
    this.router.navigate(['/model-template']);
  }

}
