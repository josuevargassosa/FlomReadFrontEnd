import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TablaMonitoreoComponent } from './tabla-monitoreo.component';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { PagesModule } from 'app/pages/pages.module';

describe('TablaMonitoreoComponent', () => {
    let component: TablaMonitoreoComponent;
    let fixture: ComponentFixture<TablaMonitoreoComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TablaMonitoreoComponent],
            imports: [HttpClientTestingModule, PagesModule],
        }).compileComponents();

        fixture = TestBed.createComponent(TablaMonitoreoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
