import { ViewContainerRef, TemplateRef, NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { StructuralDirective } from './structural.directive';
import { DummyComponent } from '../../test-util/dummy-cmp/dummy.component';

describe('StructuralDirective', () => {
    describe('Test by Itself', () => {
        // Mock ViewContainerRef
        const viewContainer = { createEmbeddedView: (tf, context) => {} } as ViewContainerRef;
        const templateRef = {} as TemplateRef<any>;

        it('should create an instance', () => {
            const directive = new StructuralDirective(viewContainer, templateRef);
            expect(directive).toBeTruthy();
        });
    });

    describe('Test with Component', () => {
        let cmpFixture: ComponentFixture<DummyComponent>,
            cmpHost: DebugElement,
            cmpInst: DummyComponent,
            structuralDirective: StructuralDirective,
            spyPropOne: any,
            spyPropTwo: any,
            cmpTplElem: any,
            childrenElem: any;

        const passedProp1 = ['ONE', 'TWO', 'THREE'];
        const passedProp2 = 'lorem';

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                providers: [
                    TemplateRef,
                    ViewContainerRef
                ],
                declarations: [
                    DummyComponent,
                    StructuralDirective
                ],
                // schemas: [ NO_ERRORS_SCHEMA ]
            });
        }));

        beforeEach(() => {
            const option = {set: {template: `<p *appStructuralDir="['ONE', 'TWO', 'THREE']; testPass:'lorem'; extraPropToPass:'lorem'; let val; let idx=_idx;">{{val}} &amp; {{idx}}</p>`}};
            cmpFixture = TestBed.overrideComponent(DummyComponent, option).createComponent(DummyComponent);
            cmpHost = cmpFixture.debugElement;
            cmpInst = cmpFixture.componentInstance;
            cmpTplElem = cmpHost.nativeElement;

            structuralDirective = cmpHost.childNodes[0].injector.get(StructuralDirective);
            spyPropOne = spyOnProperty(structuralDirective, 'appStructuralDir', 'set').and.callThrough();
            spyPropTwo = spyOnProperty(structuralDirective, 'appStructuralDirExtraPropToPass', 'set').and.callThrough();

            // !!NOTE: detect changes should NOT be called here as it will TRIGGER the directive on the Component
            // Only call this in isolated test RIGHT AFTER the directive's property is spied
            cmpFixture.detectChanges();

            // !!NOTE: Only get the Child Elements AFTER directive has been applied to the Component & triggered
            childrenElem = cmpTplElem.querySelectorAll('p');
        });

        it('should call directive\'s setter properties by passing the component bound properties to directive', () => {
            expect(spyPropOne).toHaveBeenCalledWith(passedProp1);
            expect(spyPropTwo).toHaveBeenCalledWith(passedProp2);
            expect(structuralDirective.appStructuralDirTestPass).toBe('lorem');
        });

        it('the values passed to the directive should reflect in Component\'s Template View', () => {
            expect(childrenElem.length).toBe(3);
            expect(childrenElem[0].textContent).toContain('ONE & 0');
        });
    });
});
