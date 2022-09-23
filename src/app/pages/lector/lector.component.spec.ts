import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectorComponent } from './lector.component';

describe('LectorComponent', () => {
  let component: LectorComponent;
  let fixture: ComponentFixture<LectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
