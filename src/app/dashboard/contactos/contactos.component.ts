import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import * as fromTipoEntidadContactoList from '@app/store/tiposEntidadContacto/list/list.reducer';
import { Contacto } from '@app/core/models/Contacto';
import { TipoEntidadContacto } from '@app/core/models/TipoEntidadContacto ';
import { ListActions } from '@app/store/tiposEntidadContacto/list/list.actions';
import { ContactoService } from '@app/core/services/contacto.services';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { getLoading as getListLoading, getTipo } from '@app/store/tiposEntidadContacto/list/list.selectors';

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
  tiposEntidadContacto$ !: Observable<TipoEntidadContacto[] | null>
  isListTipoEntidadContactoLoading$ !: Observable<boolean | null>;

  cols!: number;

  constructor(
    private _breakpointObserver: BreakpointObserver, 
    private contactoService: ContactoService, 
    private storeTipoEntidadContactoList: Store<fromTipoEntidadContactoList.ListState>
    ) {}


  ngOnInit() {
    this.isListTipoEntidadContactoLoading$ = this.storeTipoEntidadContactoList.select(getListLoading);

    //Seleccionar empresas y seleccionar empresa activa incial
    this.storeTipoEntidadContactoList.dispatch(ListActions.readAllStart());

    this.tiposEntidadContacto$ = this.storeTipoEntidadContactoList.select(getTipo) as Observable<TipoEntidadContacto[]>
    this.tiposEntidadContacto$.subscribe(res => console.log(res));


    this.contactoService.getContactos()
      .subscribe(contactos => this.contactos);
    this.contactoService.getContactos()
      .subscribe((data) => {
          this.contactos = data;
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