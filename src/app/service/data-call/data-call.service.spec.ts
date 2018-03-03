import { TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DataCallService } from './data-call.service';

/**
 * Note:
 * - DataCallService.getJsonpData is not tested here due to a Bug in Angular
 */
describe('DataCallService', () => {
    let dataCallServ, http, mockedBackend;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ HttpClientModule, HttpClientJsonpModule, HttpClientTestingModule ],
            providers: [ DataCallService, HttpClient ],
        });
        dataCallServ = TestBed.get(DataCallService);
        http = TestBed.get(HttpClient);
        mockedBackend = TestBed.get(HttpTestingController);
    });

    it('should be created', inject([DataCallService], (service: DataCallService) => {
        expect(service).toBeTruthy();
    }));

    describe('Test returned data via Mocked Promise', () => {
        const mockedJsonData = { id: 1, name: 'john' };
        const mockedPromise = new Promise(resolve => {
            resolve(mockedJsonData);
        });

        it('should return a resolved mocked promise with mocked json data', done => {
            spyOn(dataCallServ, 'getJsonData').and.returnValue(mockedPromise);

            dataCallServ.getJsonData().then(jsonData => {
                expect(jsonData.id).toBe(mockedJsonData.id);
                expect(jsonData.name).toBe(mockedJsonData.name);
                done();
            });
        });
    });

    describe('Test returned data via Mocked Backend', () => {
        const mockedUrl = 'http://lorem.sum';
        const mockedJsonpData = { id: 1, name: 'john' };
        const mockedFailErrMsg = 'CALL ERROR';

        afterEach(() => {
            mockedBackend.verify();
        });

        it('should resolve with mocked jsonp data', done => {
            dataCallServ.getJsonData(mockedUrl).then((data) => {
                expect(data).toBe(mockedJsonpData);
            });

            const mockedReq = mockedBackend.expectOne(mockedUrl);
            expect(mockedReq.request.method).toBe('GET');
            expect(mockedReq.request.responseType).toEqual('json');

            mockedReq.flush(mockedJsonpData);
            done();
        });

        it('should reject with error msg', done => {
            dataCallServ.getJsonData(mockedUrl).then((data) => {}, (errResp) => {
                expect(errResp.status).toEqual(404, 'status');
                expect(errResp.error).toEqual(mockedFailErrMsg, 'message');
            });

            const mockedReq = mockedBackend.expectOne(mockedUrl);
            expect(mockedReq.request.method).toBe('GET');
            expect(mockedReq.request.responseType).toEqual('json');

            mockedReq.flush(mockedFailErrMsg, { status: 404, statusText: 'Not Found' });
            done();
        });
    });
});
