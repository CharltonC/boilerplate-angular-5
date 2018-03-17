import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoViewchildViewChildrenComponent } from './demo-viewchild-viewchildren.component';
import { DummyDirective } from '../../../test-util/dummy-dir/dummy-dir.directive';
import { DummyComponent } from '../../../test-util/dummy-cmp/dummy-cmp.component';

describe('Demo for Component with @ViewChild/@ViewChildren', () => {
    let cmpInst: DemoViewchildViewChildrenComponent;
    let cmpFixture: ComponentFixture<DemoViewchildViewChildrenComponent>;
    let cmpHost;
    let cmpTplElem;
    let cmpInjector;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                DemoViewchildViewChildrenComponent,
                DummyDirective,
                DummyComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        cmpFixture = TestBed.createComponent(DemoViewchildViewChildrenComponent);
        cmpHost = cmpFixture.debugElement;
        cmpInjector = cmpHost.injector;
        cmpTplElem = cmpHost.nativeElement;
        cmpInst = cmpFixture.componentInstance;
        cmpFixture.detectChanges();
    });

    describe('Test with nested Dummy Component in Template', () => {
        it('should be able to access nested component from @ViewChild & @ViewChildren', () => {
            const dummyCmp = cmpHost.childNodes[0].childNodes[1].componentInstance;
            expect(cmpInst.dummyCmp).toBe(dummyCmp);
            expect(cmpInst.dummyCmps.first).toBe(dummyCmp);
        });

        it('should contain the text content of the nested component', () => {
            const paragraphElem = cmpTplElem.querySelector('div');
            expect(paragraphElem.textContent).toContain('dummy works!');
        });
    });

    describe('Test with nested Dummy Directive in Template', () => {
        it('should be able to access the nested directive from @ViewChild & @ViewChildren', () => {
            const dummyDirective = cmpHost.childNodes[0].injector.get(DummyDirective);
            expect(cmpInst.dummyDirective).toBe(dummyDirective);
            expect(cmpInst.dummyDirectives.first).toBe(dummyDirective);
        });
    });

});
