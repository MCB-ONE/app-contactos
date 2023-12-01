import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit{

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