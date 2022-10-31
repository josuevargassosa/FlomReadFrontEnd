import { async, inject, TestBed } from '@angular/core/testing';
import { LectorService } from './lector.service';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
describe('LectorService', () => {
  let service: LectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LectorService],
    });
    service = TestBed.inject(LectorService);
  });
  
  it("Should be created", inject([LectorService], (service: LectorService) => {
    expect(service).toBeTruthy();
  }));

  it ("should get lector", async(() => {
    const service: LectorService = TestBed.get(LectorService);
    service.getLectores().subscribe(
      (response) => expect(response).not.toBeNull(),
      (error) => fail(error)
    );
    
  }))
});
