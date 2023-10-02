import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/core/models/Contacto';
import { ContactoService } from 'src/app/core/services/contacto.services';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.scss']
})

export class ContactosComponent implements OnInit{
  public get breakpointObserver(): BreakpointObserver {
    return this._breakpointObserver;
  }
  public set breakpointObserver(value: BreakpointObserver) {
    this._breakpointObserver = value;
  }
  contactos!: Contacto[];


  cols!: number;

  constructor(private _breakpointObserver: BreakpointObserver, private contactoService: ContactoService) {}


  ngOnInit() {
    this.contactoService.getContactos()
      .subscribe(contactos => this.contactos);
    this.contactoService.getContactos()
      .subscribe((data) => {
          this.contactos = data;
          console.log(this.contactos);
        });
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.Handset]).subscribe(result => {
      if (result.matches) {
        this.cols = 1; // En dispositivos pequeños, mostrar una sola columna
      } else {
        this.cols = 6; // En dispositivos más grandes, mostrar dos columnas
      }
    });
  }
}