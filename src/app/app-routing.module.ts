import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientesComponent } from './dashboard/clientes/clientes.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'clientes', component: ClientesComponent },
      // Add more routes for other dashboard components
    ],
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
  // Add other routes for non-dashboard components if needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
