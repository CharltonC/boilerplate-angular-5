import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, TemplateRef, ViewContainerRef } from '@angular/core';
import { By } from '@angular/platform-browser';

import { Demo4Component } from './demo4.component';
import { StructuralDirective } from '../../../directive/structural/structural.directive';

describe('Demo4Component', () => {
    let cmpFixture: ComponentFixture<Demo4Component>;
    let cmpHost;
    let cmpInst: Demo4Component;
    let structuralDirective: StructuralDirective;
    let cmpTplElem;
    // let spyPropOne;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                TemplateRef,
                ViewContainerRef
            ],
            declarations: [
                Demo4Component,
                StructuralDirective
            ],
            // schemas: [ NO_ERRORS_SCHEMA ]
        }).compileComponents();
    }));

    beforeEach(() => {
        cmpFixture = TestBed.createComponent(Demo4Component);
        cmpHost = cmpFixture.debugElement;
        cmpInst = cmpFixture.componentInstance;
        cmpTplElem = cmpHost.nativeElement;
        structuralDirective = cmpHost.childNodes[0].injector.get(StructuralDirective);

        // !!NOTE: detect changes should NOT be called here as it will TRIGGER the directive on the Component
        // Only call this in isolated test RIGHT AFTER the directive's property is spied
        // cmpFixture.detectChanges();
    });

    it('should create', () => {
        cmpFixture.detectChanges();
        expect(cmpInst).toBeTruthy();
    });

    describe('with structural directive `appStructuralDir`', () => {
        let spyPropOne,
            spyPropTwo,
            childrenElem;

        beforeEach(() => {
            // spy = spyOnProperty(structuralDirective, 'appStructuralDir', 'set').and.callFake(() => {});
            spyPropOne = spyOnProperty(structuralDirective, 'appStructuralDir', 'set').and.callThrough();
            spyPropTwo = spyOnProperty(structuralDirective, 'appStructuralDirExtraPropToPass', 'set').and.callThrough();
            cmpFixture.detectChanges();

            // !!NOTE: Only get the Child Elements AFTER directive has been applied to the Component & triggered
            childrenElem = cmpTplElem.querySelectorAll('p');
        });

        it('should call directive\'s setter properties by passing the component bound properties to directive', () => {
            expect(spyPropOne).toHaveBeenCalledWith(cmpInst.passedProp1);
            expect(spyPropTwo).toHaveBeenCalledWith(cmpInst.passedProp2);
            expect(structuralDirective.appStructuralDirTestPass).toBe('lorem');
        });

        it('the values passed to the directive should reflect in Component\'s Template View', () => {
            expect(childrenElem.length).toBe(3);
            expect(childrenElem[0].textContent).toContain('ONE & 0');
        });
    });
});
