import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../empleado';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  //URL del BackEnd
  private baseURL = 'http://localhost:8080/api/v1/empleados';

  constructor(private httpClient: HttpClient) {}

  //Obtener Todos los empleados
  obtenerListaDeEmpleados(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(`${this.baseURL}`);
  }

  //Registar Empleado
  registrarEmpleado(empleado: Empleado): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, empleado);
  }

  //Obtener o buscar un empleado
  obtenerEmpleadoPorId(id: number): Observable<Empleado> {
    return this.httpClient.get<Empleado>(`${this.baseURL}/${id}`);
  }

  //Actualizar Empleado
  actualizarEmpleado(id:number,empleado:Empleado) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,empleado);
  }

  //Eliminar un empleado
  eliminarEmpleado(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
