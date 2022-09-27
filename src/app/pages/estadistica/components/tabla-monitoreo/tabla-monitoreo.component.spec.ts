import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMonitoreoComponent } from './tabla-monitoreo.component';

describe('TablaMonitoreoComponent', () => {
  let component: TablaMonitoreoComponent;
  let fixture: ComponentFixture<TablaMonitoreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaMonitoreoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaMonitoreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
