import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoLibroComponent } from './prestamo-libro.component';

describe('PrestamoLibroComponent', () => {
  let component: PrestamoLibroComponent;
  let fixture: ComponentFixture<PrestamoLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestamoLibroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestamoLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
