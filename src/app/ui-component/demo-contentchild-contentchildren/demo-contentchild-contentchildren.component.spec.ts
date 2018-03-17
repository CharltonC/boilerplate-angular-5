import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, DebugElement, Injector } from '@angular/core';

import { DemoContentchildContentChildrenComponent } from './demo-contentchild-contentchildren.component';
import { DummyContainerComponent } from '../../../test-util/dummy-cmp-container/dummy-cmp-container.component';
import { DummyComponent } from '../../../test-util/dummy-cmp/dummy-cmp.component';
import { DummyDirective } from '../../../test-util/dummy-dir/dummy-dir.directive';

describe('Demo for Component with @ContentChild/@ContentChildren', () => {
    describe('Test with a Component Container', () => {
        let cmpFixture: ComponentFixture<DummyContainerComponent>;
        let cmpInst: DummyContainerComponent;
        let cmpHost: DebugElement,
            cmpTplElem: any;

        let demo5CmpHost: DebugElement,
            demo5CmpInst: DemoContentchildContentChildrenComponent;

        beforeEach(async(() => {
            // NO `.compileComponents()` called here as HTML is inline
            TestBed.configureTestingModule({
                declarations: [
                    DummyContainerComponent,
                    DemoContentchildContentChildrenComponent,
                    DummyComponent,
                    DummyDirective
                ]
            });
        }));

        beforeEach(() => {
            const overideTemplate = `<app-demo-contentchild-contentchildren appDummyDir><app-dummy></app-dummy></app-demo-contentchild-contentchildren>`;
            cmpFixture = TestBed.overrideComponent(DummyContainerComponent, {set: {template: overideTemplate}}).createComponent(DummyContainerComponent);
            cmpHost = cmpFixture.debugElement;
            cmpInst = cmpFixture.componentInstance;
            cmpFixture.detectChanges();
            cmpTplElem = cmpHost.nativeElement;

            demo5CmpHost = cmpHost.childNodes[0] as DebugElement;
            demo5CmpInst = demo5CmpHost.componentInstance;
        });

        describe('Test with passed Dummy Component', () => {
            it('the passed component should be same as the one from @ContentChild/@ContentChildren', () => {
                const dummyCmpInst = demo5CmpHost.childNodes[0].componentInstance;
                expect(demo5CmpInst.dummyCmp).toBe(dummyCmpInst);
                expect(demo5CmpInst.dummyCmps.first).toBe(dummyCmpInst);
            });

            it('should have both <app-demo-contentchild-contentchildren> and <app-dummy> elements in View', () => {
                const demo5Elems = cmpTplElem.querySelectorAll('app-demo-contentchild-contentchildren');
                expect(demo5Elems.length).toBe(1);
                expect(demo5Elems[0].querySelectorAll('app-dummy').length).toBe(1);
            });
        });

        describe('Test with passed Dummy Directive', () => {
            it('the passed directive should be same as the one from @ContentChild/@ContentChildren', () => {
                const dummyDir = demo5CmpHost.injector.get(DummyDirective);
                expect(demo5CmpInst.dummyDir).toBe(dummyDir);
                expect(demo5CmpInst.dummyDirs.first).toBe(dummyDir);
            });
        });
    });
});
