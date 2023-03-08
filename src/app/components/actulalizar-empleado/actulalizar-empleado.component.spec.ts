import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActulalizarEmpleadoComponent } from './actualizar-empleado.component';

describe('ActulalizarEmpleadoComponent', () => {
  let component: ActulalizarEmpleadoComponent;
  let fixture: ComponentFixture<ActulalizarEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActulalizarEmpleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActulalizarEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
