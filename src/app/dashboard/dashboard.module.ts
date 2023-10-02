import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ContactosModule } from './contactos/contactos.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,    
    RouterModule,
    DashboardRoutingModule,
    //Dashboard modules
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    ContactosModule,

  ]
})
export class DashboardModule { }
