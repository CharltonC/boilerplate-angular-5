import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, DebugElement, Injector } from '@angular/core';

import { Demo5Component } from './demo5.component';
import { DummyContainerComponent } from '../dummy-container/dummy-container.component';
import { DummyComponent } from '../dummy/dummy.component';

describe('Demo5Component', () => {
    let cmpFixture: ComponentFixture<DummyContainerComponent>;
    let cmpInst: DummyContainerComponent;
    let cmpHost: DebugElement,
        cmpTplElem: any;

    beforeEach(async(() => {
        // NO `.compileComponents()` called here as HTML is inline
        TestBed.configureTestingModule({
            declarations: [
                DummyContainerComponent,
                Demo5Component,
                DummyComponent
            ]
        });
    }));

    beforeEach(() => {
        const overideTemplate = `<app-demo5><app-dummy></app-dummy></app-demo5>`;
        cmpFixture = TestBed.overrideComponent(DummyContainerComponent, {set: {template: overideTemplate}}).createComponent(DummyContainerComponent);
        cmpHost = cmpFixture.debugElement;
        cmpInst = cmpFixture.componentInstance;
        cmpFixture.detectChanges();
        cmpTplElem = cmpHost.nativeElement;
    });

    it('should have DummyComponent available as property via @ViewChild', () => {
        const demo5CmpHost = cmpHost.childNodes[0] as DebugElement,
            demo5CmpInst = demo5CmpHost.componentInstance,
            dummyCmpInst = demo5CmpHost.childNodes[0].componentInstance;

        expect(demo5CmpInst.dummyCmp).toBe(dummyCmpInst);
    });

    it('should have both <app-demo5> and <app-dummy> elements in View', () => {
        const demo5Elems = cmpTplElem.querySelectorAll('app-demo5');
        expect(demo5Elems.length).toBe(1);
        expect(demo5Elems[0].querySelectorAll('app-dummy').length).toBe(1);
    });
});
