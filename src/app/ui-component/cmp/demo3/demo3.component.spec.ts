import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo3Component } from './demo3.component';
import { AttributeDirective } from '../../../directive/attribute/attribute.directive';

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
                AttributeDirective
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

    describe('with attribute directive `appAttrDir`', () => {
        let attrDirective;
        let paragraphElem;

        beforeEach(() => {
            attrDirective = cmpHost.children[0].injector.get(AttributeDirective);
            paragraphElem = cmpTplElem.querySelector('p');
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
