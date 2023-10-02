import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './contactos.component';

const routes: Routes = [
  {
    path: '',
    component: ContactosComponent
  },
  // {
  //   path: 'nueva',
  //   loadChildren: () => import('./pages/new-empresa/new-empresa.module').then(m=> m.NewEmpresaModule)
  // },
  // {
  //   path: 'actualizar/:id',
  //   loadChildren: () => import('./pages/update-empresa/update-empresa.module').then(m=> m.UpdateEmpresaModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ContactosRoutingModule { }
