import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactosComponent } from './contactos.component';
import { ContactosRoutingModule } from './contactos-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule  } from '@angular/material/card';

@NgModule({
  declarations: [
    ContactosComponent
  ],
  imports: [
    CommonModule,
    ContactosRoutingModule,
    //Contactos MODULES
    MatToolbarModule,
    MatGridListModule,
    MatCardModule
  ]
})
export class ContactosModule { }
