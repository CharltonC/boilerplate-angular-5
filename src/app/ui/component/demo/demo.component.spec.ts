import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { DemoComponent } from './demo.component';
import { DataCallService } from '../../../service/data-call/data-call.service';

describe('DemoComponent', () => {
    const mockedJson = {txt: 'json-data'};
    const mockedDataCallServ = {
        getJsonData: () => Promise.resolve(mockedJson),
        getJsonpData: () => Promise.resolve(mockedJson)
    };

    let cmpInst: DemoComponent;
    let cmpFixture: ComponentFixture<DemoComponent>;
    let dataCallServ;
    let spyJson, spyJsonp;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ DemoComponent ],
            providers: [
                { provide: DataCallService, useValue: mockedDataCallServ }
            ],
        }).compileComponents();

        dataCallServ = TestBed.get(DataCallService);
        spyJson = spyOn(dataCallServ, 'getJsonData').and.callThrough();
        spyJsonp = spyOn(dataCallServ, 'getJsonpData').and.callThrough();
    }));

    beforeEach(() => {
        cmpFixture = TestBed.createComponent(DemoComponent);
        cmpInst = cmpFixture.componentInstance;
        cmpFixture.detectChanges();
    });

    it('should create', () => {
        expect(cmpInst).toBeTruthy();
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
