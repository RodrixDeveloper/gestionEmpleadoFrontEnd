import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarEmpleadoComponent } from './components/actulalizar-empleado/actulalizar-empleado.component';

import { EmpleadoDetallesComponent } from './components/empleado-detalles/empleado-detalles.component';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';
import { RegistrarEmpleadoComponent } from './components/registrar-empleado/registrar-empleado.component';

const routes: Routes = [
  { path: 'empleados', component: ListaEmpleadosComponent },
  { path: 'registrar-empleado', component: RegistrarEmpleadoComponent },
  { path: 'actualizar-empleado/:id', component: ActualizarEmpleadoComponent },
  { path: 'empleado-detalles/:id', component: EmpleadoDetallesComponent },
  { path: '', redirectTo: 'empleados', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
