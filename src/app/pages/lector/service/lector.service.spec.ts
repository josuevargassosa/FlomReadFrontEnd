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

    it('Should be created', inject(
        [LectorService],
        (service: LectorService) => {
            expect(service).toBeTruthy();
        }
    ));

    it('should get lector', async(() => {
        const service: LectorService = TestBed.inject(LectorService);
        service.getLectores().subscribe(
            (value) => {
                expect(value).not.toBeNull();
            }
            // (response) => expect(response).not.toBeNull(),
            // (error) => fail(error)
        );
    }));
});

// describe('MasterService without Angular testing support', () => {
//   let masterService: MasterService;

//   it('#getValue should return real value from the real service', () => {
//     masterService = new MasterService(new ValueService());
//     expect(masterService.getValue()).toBe('real value');
//   });

//   it('#getValue should return faked value from a fakeService', () => {
//     masterService = new MasterService(new FakeValueService());
//     expect(masterService.getValue()).toBe('faked service value');
//   });

//   it('#getValue should return faked value from a fake object', () => {
//     const fake =  { getValue: () => 'fake value' };
//     masterService = new MasterService(fake as ValueService);
//     expect(masterService.getValue()).toBe('fake value');
//   });

//   it('#getValue should return stubbed value from a spy', () => {
//     // create `getValue` spy on an object representing the ValueService
//     const valueServiceSpy =
//       jasmine.createSpyObj('ValueService', ['getValue']);

//     // set the value to return when the `getValue` spy is called.
//     const stubValue = 'stub value';
//     valueServiceSpy.getValue.and.returnValue(stubValue);

//     masterService = new MasterService(valueServiceSpy);

//     expect(masterService.getValue())
//       .withContext('service returned stub value')
//       .toBe(stubValue);
//     expect(valueServiceSpy.getValue.calls.count())
//       .withContext('spy method was called once')
//       .toBe(1);
//     expect(valueServiceSpy.getValue.calls.mostRecent().returnValue)
//       .toBe(stubValue);
//   });
// });
