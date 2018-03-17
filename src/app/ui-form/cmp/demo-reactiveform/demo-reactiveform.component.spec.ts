import { DebugElement } from '@angular/core';
import { async, fakeAsync, flush, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { DemoReactiveFormComponent } from './demo-reactiveform.component';
import { DemoFormGroupService } from '../../model/demo-formgroup/demo-formgroup.service';

describe('Demo for Reactive Form Component', () => {
    let cmpFixture: ComponentFixture<DemoReactiveFormComponent>;
    let cmpInst: DemoReactiveFormComponent;
    let cmpHost: DebugElement;
    let cmpTplElem;
    let fmGrp: FormGroup;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ ReactiveFormsModule ],
            providers: [ DemoFormGroupService ],
            declarations: [ DemoReactiveFormComponent ]
        }).compileComponents();
    }));

    beforeEach(() => {
        cmpFixture = TestBed.createComponent(DemoReactiveFormComponent);
        cmpInst = cmpFixture.componentInstance;
        cmpHost = cmpFixture.debugElement;
        cmpTplElem = cmpHost.nativeElement;
        fmGrp = cmpInst.fmGrpInst;

        cmpFixture.detectChanges();
    });

    describe('Form in general', () => {
        it('should create', () => {
            expect(cmpInst).toBeTruthy();
            expect(fmGrp).toBeTruthy();
        });
    });

    describe('text input group', () => {
        let inputGrpCtrl: FormGroup,
            inputCtrl1: FormControl,
            inputElem1;

        beforeEach(() => {
            // similar to testing for template-driven form
            // `as FormGroup` this does the trick of avoiding linting error on `inputCtrl.controls`
            inputGrpCtrl = fmGrp.controls.grpCtrlName as FormGroup;
            inputCtrl1 = inputGrpCtrl.controls.reactiveInputCtrl1 as FormControl;
            inputElem1 = cmpTplElem.querySelector('#reactive-input-1');
        });

        // no `async/cmpFixture.whenStable().then()` needed
        it('should have default value', () => {
            expect(inputElem1.value).toBe(inputCtrl1.value);
        });

        it('should update in view when value changes in its form control', () => {
            inputCtrl1.setValue('new val');
            cmpFixture.detectChanges();
            expect(inputElem1.value).toBe('new val');
        });

        it('should validate when it is empty', () => {
            expect(inputCtrl1.invalid).toBe(false);
            inputCtrl1.setValue('');
            cmpFixture.detectChanges();
            expect(inputCtrl1.invalid).toBe(true);
            expect(inputCtrl1.errors.required).toBe(true);
        });

        it('should validate when contains `abc` string', () => {
            expect(inputCtrl1.invalid).toBe(false);
            inputCtrl1.setValue('abcd');
            cmpFixture.detectChanges();
            expect(inputCtrl1.invalid).toBe(true);
            expect(inputCtrl1.errors.abc).toBe(true);
        });
    });
});
