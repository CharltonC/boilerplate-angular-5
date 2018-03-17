import { Component, OnInit } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DemoDataCallService } from './demo-datacall.service';

/**
 * Note:
 * - DemoDataCallService.getJsonpData is not tested here due to a Bug in Angular
 */
describe('Demo for Data Fetch Service', () => {
    let dataCallServ;

    // Mocked Component
    @Component({
        selector: 'app-demo',
        template: '',
    })
    class MockedComponent implements OnInit {
        jsonProp: object;
        jsonpProp: object;
        constructor(private dataCall: DemoDataCallService) { }
        ngOnInit() {
            this.dataCall.getJsonData().then(data => {
                this.jsonProp = data;
            });
            this.dataCall.getJsonpData().then(data => {
                this.jsonpProp = data;
            });
        }
    }

    beforeEach(async(() => {
        // Config Test
        TestBed.configureTestingModule({
            imports: [ HttpClientModule, HttpClientJsonpModule, HttpClientTestingModule ],
            providers: [ DemoDataCallService, HttpClient ],
            declarations: [ MockedComponent ]
        });

        // Get Service
        dataCallServ = TestBed.get(DemoDataCallService);
    }));

    describe('Test by Itself', () => {
        it('should be created', () => {
            expect(dataCallServ).toBeTruthy();
        });
    });

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
        let mockedBackend;

        beforeEach(() => {
            mockedBackend = TestBed.get(HttpTestingController);
        });

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

    describe('Test with Component and mocked Promise', () => {
        let cmpFixture: ComponentFixture<MockedComponent>,
            cmpInst: MockedComponent,
            spyJson, spyJsonp;

        const mockedJson = {txt: 'json-data'};

        beforeEach(() => {
            cmpFixture = TestBed.createComponent(MockedComponent);
            cmpInst = cmpFixture.componentInstance;

            spyJson = spyOn(dataCallServ, 'getJsonData').and.returnValue(Promise.resolve(mockedJson));
            spyJsonp = spyOn(dataCallServ, 'getJsonpData').and.returnValue(Promise.resolve(mockedJson));

            cmpFixture.detectChanges();
        });

        it('should assign `jsonProp` property with json data at ngOnInit', done => {
            spyJson.calls.mostRecent().returnValue.then(() => {
                cmpFixture.detectChanges();
                expect(cmpInst.jsonProp).toBe(mockedJson);
                done();
            });
        });

        it('should assign `jsonpProp` property with jsonp data at ngOnInit', done => {
            spyJsonp.calls.mostRecent().returnValue.then(() => {
                cmpFixture.detectChanges();
                expect(cmpInst.jsonpProp).toBe(mockedJson);
                done();
            });
        });
    });
});
