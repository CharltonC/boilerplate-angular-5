import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo3Component } from './demo3.component';
import { DummyDirective } from '../../../../test-util/dummy-directive/dummy.directive';
import { DummyComponent } from '../../../../test-util/dummy-cmp/dummy.component';

describe('Demo3Component', () => {
    let cmpInst: Demo3Component;
    let cmpFixture: ComponentFixture<Demo3Component>;
    let cmpHost;
    let cmpTplElem;
    let cmpInjector;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                Demo3Component,
                DummyDirective,
                DummyComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        cmpFixture = TestBed.createComponent(Demo3Component);
        cmpHost = cmpFixture.debugElement;
        cmpInjector = cmpHost.injector;
        cmpTplElem = cmpHost.nativeElement;
        cmpInst = cmpFixture.componentInstance;
        cmpFixture.detectChanges();
    });

    it('should create', () => {
        expect(cmpInst).toBeTruthy();
    });

    describe('@ViewChild/@ViewChildren with nested DummyComponent in Template', () => {
        let dummyCmp,
            paragraphElem;

        beforeEach(() => {
            dummyCmp = cmpHost.childNodes[0].childNodes[1].componentInstance;
            paragraphElem = cmpTplElem.querySelector('div');
        });

        it('the nested component should be equal to the one from @ViewChild & @ViewChildren', () => {
            expect(dummyCmp).toBe(cmpInst.dummyCmp);
            expect(dummyCmp).toBe(cmpInst.dummyCmps.first);
        });

        it('should contain the text content of the nested component', () => {
            expect(paragraphElem.textContent).toContain('dummy works!');
        });
    });

    describe('@ViewChild/@ViewChildren with nested DummyDirective in Template', () => {
        it('the nested directive should be equal to the one from @ViewChild & @ViewChildren', () => {
            const dummyDirective = cmpHost.childNodes[0].injector.get(DummyDirective);
            expect(cmpInst.dummyDirective).toBe(dummyDirective);
            expect(cmpInst.dummyDirectives.first).toBe(dummyDirective);
        });
    });

});
