import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ModelTemplateComponent } from './components/model-template/model-template.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'model-template', component: ModelTemplateComponent}
];
