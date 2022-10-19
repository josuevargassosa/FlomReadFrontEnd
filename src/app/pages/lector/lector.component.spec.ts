import 'zone.js';
import 'zone.js/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectorComponent } from './lector.component';
import { PagesModule } from '../pages.module';

describe('LectorComponent', () => {
  let component: LectorComponent;
  let fixture: ComponentFixture<LectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesModule ]
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
