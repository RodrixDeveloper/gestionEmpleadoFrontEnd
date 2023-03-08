import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css'],
})
export class RegistrarEmpleadoComponent implements OnInit {
  empleado: Empleado = new Empleado();
  constructor(
    private empleadoService: EmpleadoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  guardarEmpleado() {
    this.empleadoService.registrarEmpleado(this.empleado).subscribe(
      (dato) => {
        console.log(dato);
        this.irAlaListaDeEmpleados();
      },
      (error) => console.log(error)
    );
  }

  irAlaListaDeEmpleados() {
    this.router.navigate(['/empleados']);
    swal('Empleado registrado',`El empleado ${this.empleado.nombre} ha sido registrado con exito`,`success`);

  }

  onSubmit() {
    this.guardarEmpleado();
  }
}
