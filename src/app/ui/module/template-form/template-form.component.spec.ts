import { async, ComponentFixture, TestBed, fakeAsync, flush, tick, flushMicrotasks } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { FormModelService } from '../../../service/form-model/form-model.service';

import { TemplateFormComponent } from './template-form.component';
import { DemoInputValidatorDirective } from '../../../directive/demo-input-validator/demo-input-validator.directive';

describe('TemplateFormComponent', () => {
    let cmpFixture: ComponentFixture<TemplateFormComponent>;
    let cmpInst: TemplateFormComponent;
    let cmpHost, cmpTplElem, cmpInjector;

    let formModel: FormModelService;
    let ngForm: NgForm;

    let inputElem, rdoElem1, rdoElem2, checkboxElem1, checkboxElem2, selectElem, selectOptionChildrenElem, selectOptionChildElem1, selectOptionChildElem2;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ FormsModule ],
            providers: [ FormModelService ],
            declarations: [
                TemplateFormComponent,
                DemoInputValidatorDirective
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        // Self
        cmpFixture = TestBed.createComponent(TemplateFormComponent);
        cmpInst = cmpFixture.componentInstance;
        cmpHost = cmpFixture.debugElement;
        cmpInjector = cmpHost.injector;
        cmpTplElem = cmpHost.nativeElement;

        // Service/Directives
        formModel = TestBed.get(FormModelService);
        ngForm = cmpHost.children[0].injector.get(NgForm);      // Get the Injector of the child <form>

        // Get Dom Elements
        inputElem = cmpTplElem.querySelector('#input-1');
        rdoElem1 = cmpTplElem.querySelector('#rdo-1');
        rdoElem2 = cmpTplElem.querySelector('#rdo-2');
        checkboxElem1 = cmpTplElem.querySelector('#checkbox-1');
        checkboxElem2 = cmpTplElem.querySelector('#checkbox-2');
        selectElem = cmpTplElem.querySelector('#select-1');
        selectOptionChildrenElem = selectElem.querySelectorAll('option');
        selectOptionChildElem1 = selectOptionChildrenElem[0];
        selectOptionChildElem2 = selectOptionChildrenElem[1];

        // populate changes to view
        cmpFixture.detectChanges();
    });

    it('should create', () => {
        expect(cmpInst).toBeTruthy();
    });

    it('should contain default value in the view', async(() => {
        cmpFixture.whenStable().then(() => {
            cmpFixture.detectChanges();
            expect(cmpInst.formModel).toBe(formModel);
            expect(inputElem.value).toBe(formModel.demoInput);
            expect(rdoElem1.checked).toBe(true);
            expect(rdoElem2.checked).toBe(false);
            expect(checkboxElem1.checked).toBe(true);
            expect(checkboxElem2.checked).toBe(true);
            expect(selectOptionChildElem1.selected).toBe(false);
            expect(selectOptionChildElem2.selected).toBe(true);
        });
    }));

    /* Validation */
    it('Form should be valid (based on the form model)', async(() => {
        cmpFixture.whenStable().then(() => {
            expect(ngForm.control.valid).toBe(true);
        });
    }));

    it('Text input should not have error', async(() => {
        cmpFixture.whenStable().then(() => {
            expect(ngForm.controls.demoInput.errors).toBeFalsy(true);
        });
    }));

    it('Text Input should have error When required Text Input contains string "abc" string', async(() => {
        formModel.demoInput = '123abc';
        cmpFixture.detectChanges();
        cmpFixture.whenStable().then(() => {
            expect(ngForm.controls.demoInput.errors.abc).toEqual(true);
        });
    }));

    it('Form & Text Input should be invalid when required Text Input becomes empty', async(() => {
        formModel.demoInput = '';
        cmpFixture.detectChanges();
        cmpFixture.whenStable().then(() => {
            expect(ngForm.controls.demoInput.invalid).toBe(true);
            expect(ngForm.control.invalid).toBe(true);
        });
    }));

    it('Form & Checkbox1 should be invalid when required Checkbox1 becomes unchecked', async(() => {
        formModel.demoCheckboxGrp.one = false;
        cmpFixture.detectChanges();
        cmpFixture.whenStable().then(() => {
            expect(ngForm.controls.checkbox1.invalid).toBe(true);
            expect(ngForm.control.invalid).toBe(true);
        });
    }));
});
