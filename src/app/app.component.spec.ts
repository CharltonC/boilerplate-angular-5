import { TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let cmpFixture,
        cmpHost,
        cmpInst,
        cmpTplDivElem;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            // ignore when other components/directives etc are used inside the <app-root>
            schemas: [ NO_ERRORS_SCHEMA ]
        }).compileComponents();
    }));

    beforeEach( () => {
        cmpFixture = TestBed.createComponent(AppComponent);
        cmpHost = cmpFixture.debugElement;
        cmpInst = cmpHost.componentInstance;
        cmpTplDivElem = cmpHost.nativeElement;
        cmpFixture.detectChanges();
    });

    it('should create the app', () => {
        expect(cmpInst).toBeTruthy();
    });
});
