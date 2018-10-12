import { Component, OnInit } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Note in new version `of` is imported from 'rxjs/operators'
import { of } from 'rxjs/observable/of';

import { DemoDataCallService } from './demo-datacall-observable.service';

/**
 * Note:
 * - DemoDataCallService.getJsonpData is not tested here due to a Bug in Angular
 */
describe('Demo for Data Fetch Service', () => {
    let dataCallServ;
    let http: HttpClient;

    // Mocked Component
    @Component({
        selector: 'app-demo',
        template: '',
    })
    class MockedComponent implements OnInit {
        jsonProp: object;
        jsonpProp: object;
        jsonPropAsObsv: object;
        jsonpPropAsObsv: object;

        constructor(private dataCall: DemoDataCallService) { }

        ngOnInit() {
            this.dataCall.getJsonData().then(data => {
                this.jsonProp = data;
            });
            this.dataCall.getJsonpData().then(data => {
                this.jsonpProp = data;
            });
            this.dataCall.getJsonDataAsObservable().subscribe(data => {
                this.jsonPropAsObsv = data;
            });
            this.dataCall.getJsonpDataAsObservable().subscribe(data => {
                this.jsonpPropAsObsv = data;
            });
        }
    }
    // - End Mocked Component

    beforeEach(async(() => {
        // Config Test
        TestBed.configureTestingModule({
            imports: [ HttpClientModule, HttpClientJsonpModule, HttpClientTestingModule ],
            providers: [ DemoDataCallService, HttpClient ],
            declarations: [ MockedComponent ]
        });

        // Get Service
        dataCallServ = TestBed.get(DemoDataCallService);
        http = TestBed.get(HttpClient);
    }));

    describe('Test by itself', () => {
        it('should be created', () => {
            expect(dataCallServ).toBeTruthy();
        });
    });

    describe('Test returned data via Mocked Promise/Observable', () => {
        const mockedJsonData = { id: 1, name: 'john' };
        const mockedPromise = new Promise(resolve => resolve(mockedJsonData));
        const mockedObservable = of(mockedJsonData);

        it('should return mocked json data from mocked resolved promise', done => {
            spyOn(dataCallServ, 'getJsonData').and.returnValue(mockedPromise);

            dataCallServ.getJsonData().then(jsonData => {
                expect(jsonData.id).toBe(mockedJsonData.id);
                expect(jsonData.name).toBe(mockedJsonData.name);
                done();
            });
        });

        it('should return mocked json data from mocked observable', () => {
            spyOn(http, 'get').and.returnValue(mockedObservable);

            dataCallServ.getJsonDataAsObservable().subscribe((emittedVal) => {
                expect(emittedVal).toBe(mockedJsonData);
            });
        });
    });

    describe('Test returned data via Mocked Backend', () => {
        const mockedUrl = 'http://lorem.sum';
        const mockedJsonData = { id: 1, name: 'john' };
        const mockedFailErrMsg = 'CALL ERROR';
        let mockedBackend;

        beforeEach(() => {
            mockedBackend = TestBed.get(HttpTestingController);
        });

        afterEach(() => {
            mockedBackend.verify();
        });

        it('Promise based: should resolve with mocked json data', done => {
            dataCallServ.getJsonData(mockedUrl).then((data) => {
                expect(data).toBe(mockedJsonData);
            });

            const mockedReq = mockedBackend.expectOne(mockedUrl);
            expect(mockedReq.request.method).toBe('GET');
            expect(mockedReq.request.responseType).toEqual('json');

            mockedReq.flush(mockedJsonData);
            done();
        });

        it('Promise based: should reject with error msg', done => {
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

        it('Observable based: should resolve with mocked json data', () => {
            dataCallServ.getJsonDataAsObservable(mockedUrl).subscribe((data) => {
                expect(data).toBe(mockedJsonData);
            });

            const mockedReq = mockedBackend.expectOne(mockedUrl);
            expect(mockedReq.request.method).toBe('GET');
            expect(mockedReq.request.responseType).toEqual('json');

            mockedReq.flush(mockedJsonData);
        });

        it('Observable based: should reject with error msg', () => {
            dataCallServ.getJsonDataAsObservable(mockedUrl).subscribe((data) => {}, (errResp) => {
                expect(errResp.status).toEqual(404, 'status');
                expect(errResp.error).toEqual(mockedFailErrMsg, 'message');
            });

            const mockedReq = mockedBackend.expectOne(mockedUrl);
            expect(mockedReq.request.method).toBe('GET');
            expect(mockedReq.request.responseType).toEqual('json');

            mockedReq.flush(mockedFailErrMsg, { status: 404, statusText: 'Not Found' });
        });
    });

    describe('Test with Component and mocked Promise/Observable', () => {
        let cmpFixture: ComponentFixture<MockedComponent>;
        let cmpInst: MockedComponent;
        let spyJson: jasmine.Spy;
        let spyJsonp: jasmine.Spy;
        let spyJsonAsObservable: jasmine.Spy;
        let spyJsonpAsObservable: jasmine.Spy;

        const mockedJson = {txt: 'json-data'};

        beforeEach(() => {
            cmpFixture = TestBed.createComponent(MockedComponent);
            cmpInst = cmpFixture.componentInstance;

            spyJson = spyOn(dataCallServ, 'getJsonData').and.returnValue(Promise.resolve(mockedJson));
            spyJsonp = spyOn(dataCallServ, 'getJsonpData').and.returnValue(Promise.resolve(mockedJson));
            spyJsonAsObservable = spyOn(dataCallServ, 'getJsonDataAsObservable').and.returnValue(of(mockedJson));
            spyJsonpAsObservable = spyOn(dataCallServ, 'getJsonpDataAsObservable').and.returnValue(of(mockedJson));

            // This will trigger the lifecycle init methods in component which calls the data fetch methods
            cmpFixture.detectChanges();
        });

        it('Promise based: should assign `jsonProp` property with json data at ngOnInit', done => {
            spyJson.calls.mostRecent().returnValue.then(() => {
                cmpFixture.detectChanges();
                expect(cmpInst.jsonProp).toBe(mockedJson);
                done();
            });
        });

        it('Promise based: should assign `jsonpProp` property with jsonp data at ngOnInit', done => {
            spyJsonp.calls.mostRecent().returnValue.then(() => {
                cmpFixture.detectChanges();
                expect(cmpInst.jsonpProp).toBe(mockedJson);
                done();
            });
        });

        it('Observable based: should assign `jsonPropAsObsv` property with json data at ngOnInit', () => {
            spyJsonAsObservable.calls.mostRecent().returnValue.subscribe(() => {
                cmpFixture.detectChanges();
                expect(cmpInst.jsonPropAsObsv).toBe(mockedJson);
            });
        });

        it('Observable based: should assign `jsonpPropAsObsv` property with jsonp data at ngOnInit', () => {
            spyJsonpAsObservable.calls.mostRecent().returnValue.subscribe(() => {
                cmpFixture.detectChanges();
                expect(cmpInst.jsonpPropAsObsv).toBe(mockedJson);
            });
        });
    });

});
