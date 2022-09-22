import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEstudianteComponent } from './crear-estudiante.component';

describe('CrearEstudianteComponent', () => {
  let component: CrearEstudianteComponent;
  let fixture: ComponentFixture<CrearEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearEstudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
