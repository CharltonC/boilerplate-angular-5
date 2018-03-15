import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo2Component } from './demo2.component';

describe('Demo2Component', () => {
    let cmpInst: Demo2Component;
    let cmpFixture: ComponentFixture<Demo2Component>;
    let cmpHost, cmpInjector, cmpTplDivElem;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ Demo2Component ]
        }).compileComponents();
    }));

    beforeEach(() => {
        cmpFixture = TestBed.createComponent(Demo2Component);
        cmpInst = cmpFixture.componentInstance;
        cmpFixture.detectChanges();

        cmpHost = cmpFixture.debugElement;
        cmpInjector = cmpHost.injector;
        cmpTplDivElem = cmpHost.nativeElement;
    });

    it('should create', () => {
        expect(cmpInst).toBeTruthy();
    });

    it('should bind property values to view', () => {
        const cmpChildElem = cmpTplDivElem.querySelector('p');
        expect(cmpChildElem.textContent).toContain(cmpInst.boundProp);

        cmpInst.boundProp = 'new default value bound prop';
        cmpFixture.detectChanges();
        expect(cmpChildElem.textContent).toContain(cmpInst.boundProp);
    });

    it('test event handler', () => {
        const cmpChildElem = cmpTplDivElem.querySelector('p');
        expect(cmpInst.boundProp).toBe('default1');
        cmpChildElem.click();
        cmpFixture.detectChanges();
        expect(cmpInst.boundProp).toBe('new default1');
    });

    it('test input - Should be able to pass data to the component', () => {
        const passedVal = 'lorem sum';
        cmpInst.passedVal = passedVal;
        cmpFixture.detectChanges();
        expect(cmpTplDivElem.textContent).toContain(passedVal);
    });

    it('test output - Should be able to emit custom event', () => {
        const cmpChildElem = cmpTplDivElem.querySelector('span');

        // Subcribe to the Custom Event to see if it gets trigger, callback logic is just an example for easy testing here
        cmpInst.customEvt.subscribe((param: string) => {
            cmpInst.boundProp2 = param;
        });

        expect(cmpInst.boundProp2).toBe('default2');
        cmpChildElem.click();
        cmpFixture.detectChanges();
        expect(cmpInst.boundProp2).toBe('new default2');
    });

});
