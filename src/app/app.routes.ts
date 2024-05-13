import { Routes } from '@angular/router';
import { SandboxComponent } from './pages/sandbox/sandbox.component';

export const routes: Routes = [
  {path:'', redirectTo:'sandbox-component', pathMatch:'full'},
  { path: 'sandbox-component', component: SandboxComponent }
];
