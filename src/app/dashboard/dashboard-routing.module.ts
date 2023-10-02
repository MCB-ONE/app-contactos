import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'contactos',
        loadChildren: () => import('./contactos/contactos.module').then(m => m.ContactosModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'contactos'
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'static/404'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
