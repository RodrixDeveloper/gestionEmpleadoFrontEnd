import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';
import {HttpClientModule} from '@angular/common/http';
import { RegistrarEmpleadoComponent } from './components/registrar-empleado/registrar-empleado.component'
import { FormsModule } from '@angular/forms';
import { EmpleadoDetallesComponent } from './components/empleado-detalles/empleado-detalles.component';
import { ActualizarEmpleadoComponent } from './components/actulalizar-empleado/actulalizar-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEmpleadosComponent,
    RegistrarEmpleadoComponent,
    EmpleadoDetallesComponent,
    ActualizarEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
