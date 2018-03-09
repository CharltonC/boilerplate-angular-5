import { TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { Demo2Component } from './ui/component/cmp/demo2/demo2.component';

describe('AppComponent', () => {
    let cmpFixture,
        cmpHost,
        cmpInst,
        cmpTplDivElem;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                // for testing if exists as a child
                Demo2Component
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

    it('should have as "title" property "app"', () => {
        expect(cmpInst.title).toEqual('app');
    });

    it('should render title in a h1 tag', () => {
        const h1ElemTxt = cmpTplDivElem.querySelector('h1').textContent;
        expect(h1ElemTxt).toContain('lorem sum 123');
    });

    it('should contain the custom component element "<app-demo2>"', () => {
        const totalElem = cmpTplDivElem.querySelectorAll('app-demo2').length;
        expect(totalElem).toBe(1);
    });
});
