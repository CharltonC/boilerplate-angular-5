import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo3Component } from './demo3.component';
import { AttributeDirective } from '../../../directive/attribute/attribute.directive';
import { DummyComponent } from '../dummy/dummy.component';

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
                AttributeDirective,
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

    describe('with nested component `<app-dummy>`', () => {
        let dummyCmp,
            paragraphElem;

        beforeEach(() => {
            dummyCmp = cmpHost.childNodes[0].childNodes[0].componentInstance;
            paragraphElem = cmpTplElem.querySelector('p');
        });

        it('the nested component should be equal to the one from @ViewChild & @ViewChildren', () => {
            expect(dummyCmp).toBe(cmpInst.dummyCmp);
            expect(dummyCmp).toBe(cmpInst.dummyCmps.first);
        });

        it('should contain the text content of the nested component', () => {
            expect(paragraphElem.textContent).toContain('dummy works!');
        });
    });

    describe('with attribute directive `appAttrDir`', () => {
        let attrDirective;
        let paragraphElem;

        beforeEach(() => {
            attrDirective = cmpHost.children[0].injector.get(AttributeDirective);
            paragraphElem = cmpTplElem.querySelector('p');
        });

        it('the nested directive from Injector should be equal to the one from @ViewChild & @ViewChildren', () => {
            // `attrDirective` is same as the following:
            // - `cmpInst.attrDir` if using @ViewChild(AttributeDirective) attrDir: AttributeDirective
            // - `cmpInst.attrDirs[idx]` if using @ViewChildren(AttributeDirective) attrDirs: QueryList<AttributeDirective>
            expect(attrDirective).toBe(cmpInst.attrDir);
            expect(attrDirective).toBe(cmpInst.attrDirs.first);
        });

        it('should work have default background color style, title attribute and class name', () => {
            expect(paragraphElem.style['background-color']).toBe('red');
            expect(paragraphElem.title).toBe('demo attribute directive');
            expect(/demo\-attr\-dir/.test(paragraphElem.className)).toBe(true);
        });

        it('should call the `onClick` handler when the 1st <p> is clicked', () => {
            spyOn(attrDirective, 'onClick').and.callThrough();
            paragraphElem.click();
            cmpFixture.detectChanges();
            expect(attrDirective.onClick).toHaveBeenCalled();
        });

        it('should update in Component View when Directive property values change', () => {
            attrDirective.bgColor = 'blue';
            attrDirective.title = 'new title';
            attrDirective.clsName = false;
            cmpFixture.detectChanges();

            expect(paragraphElem.style['background-color']).toBe(attrDirective.bgColor);
            expect(paragraphElem.title).toBe(attrDirective.title);
            expect(/demo\-attr\-dir/.test(paragraphElem.className)).toBe(false);
        });

    });


});
