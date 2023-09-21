import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit{
  clientes = [
    { name: 'Cliente 1', email: 'cliente1@email.com', bio: 'Información sobre el Cliente 1' },
    { name: 'Cliente 2', email: 'cliente2@email.com', bio: 'Información sobre el Cliente 2' },
    { name: 'Cliente 1', email: 'cliente1@email.com', bio: 'Información sobre el Cliente 1' },
    { name: 'Cliente 2', email: 'cliente2@email.com', bio: 'Información sobre el Cliente 2' },
    { name: 'Cliente 1', email: 'cliente1@email.com', bio: 'Información sobre el Cliente 1' },
    { name: 'Cliente 2', email: 'cliente2@email.com', bio: 'Información sobre el Cliente 2' },
    { name: 'Cliente 1', email: 'cliente1@email.com', bio: 'Información sobre el Cliente 1' },
    { name: 'Cliente 2', email: 'cliente2@email.com', bio: 'Información sobre el Cliente 2' },
    // Agrega más clientes según sea necesario
  ];


  cols!: number;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.Handset]).subscribe(result => {
      if (result.matches) {
        this.cols = 1; // En dispositivos pequeños, mostrar una sola columna
      } else {
        this.cols = 6; // En dispositivos más grandes, mostrar dos columnas
      }
    });
  }
}