import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLectorComponent } from './modal-lector.component';

describe('ModalLectorComponent', () => {
  let component: ModalLectorComponent;
  let fixture: ComponentFixture<ModalLectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalLectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalLectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
