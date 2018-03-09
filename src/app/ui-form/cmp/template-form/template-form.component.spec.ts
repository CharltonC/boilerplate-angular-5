import { async, ComponentFixture, TestBed, fakeAsync, flush, tick, flushMicrotasks } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { FormModelService } from '../../model/form-model/form-model.service';
import { DemoInputValidatorDirective } from '../../validator/demo-directive/demo-input-validator.directive';
import { TemplateFormComponent } from './template-form.component';

describe('TemplateFormComponent', () => {
    let cmpFixture: ComponentFixture<TemplateFormComponent>;
    let cmpInst: TemplateFormComponent;
    let cmpHost, cmpTplElem, cmpInjector;

    let formModel: FormModelService;
    let fmGrp: NgForm;

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
        fmGrp = cmpHost.children[0].injector.get(NgForm);      // Get the Injector of the child <form>

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

    describe('Form in general', () => {
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

        it('Form should be valid (based on the form model)', async(() => {
            cmpFixture.whenStable().then(() => {
                expect(fmGrp.control.valid).toBe(true);
            });
        }));
    });

    describe('text input 1', () => {
        it('should not have error', async(() => {
            cmpFixture.whenStable().then(() => {
                expect(fmGrp.controls.demoInput.errors).toBeFalsy(true);
            });
        }));

        /* Test Approach Variations */
        // Approach 1 - works
        it('should have error When required Text Input contains string "abc" string', async(() => {
            formModel.demoInput = '123abc';
            cmpFixture.detectChanges();
            cmpFixture.whenStable().then(() => {
                expect(fmGrp.controls.demoInput.errors.abc).toEqual(true);
            });
        }));

        // Approach 2 - works
        // it('should have error When required Text Input contains string "abc" string', async(() => {
        //     cmpFixture.whenStable().then(() => {
        //         // must have .nativeElement, else wont work (e.g. via `querySelector`)
        //         const inputElem1 = cmpHost.query(By.css('#input-1')).nativeElement;

        //         inputElem1.value = '123abc';                    // works
        //         // formModel.demoInput = '123abc';              // wont work
        //         inputElem1.dispatchEvent(new Event('input'));   // required
        //         cmpFixture.detectChanges();                     // required

        //         expect(fmGrp.controls.demoInput.errors.abc).toEqual(true);
        //     });
        // }));

        // Approach 3 - doesnt work
        // it('should have error When required Text Input contains string "abc" string', fakeAsync(() => {
            // formModel.demoInput = '123abc';
            // tick();
            // cmpFixture.detectChanges();
            // debugger;
            // expect(fmGrp.controls.demoInput.errors.abc).toEqual(true);

            // or

            // const inputElem1 = cmpHost.query(By.css('#input-1')).nativeElement;
            // inputElem1.value = '123abc';
            // inputElem1.dispatchEvent(new Event('input'));
            // cmpFixture.detectChanges();
            // tick();
            // expect(fmGrp.controls.demoInput.errors.abc).toEqual(true);
        // }));

        it('should be invalid when required Text Input becomes empty', async(() => {
            formModel.demoInput = '';
            cmpFixture.detectChanges();
            cmpFixture.whenStable().then(() => {
                expect(fmGrp.controls.demoInput.invalid).toBe(true);
                expect(fmGrp.control.invalid).toBe(true);
            });
        }));
    });

    describe('Checkbox 1', () => {
        it('should be invalid when required Checkbox1 becomes unchecked', async(() => {
            formModel.demoCheckboxGrp.one = false;
            cmpFixture.detectChanges();
            cmpFixture.whenStable().then(() => {
                expect(fmGrp.controls.checkbox1.invalid).toBe(true);
                expect(fmGrp.control.invalid).toBe(true);
            });
        }));
    });

    describe('Select dropdown', () => {
        it('should update selected option in view when model value changes', async(() => {
            formModel.demoSelect = 'one';
            cmpFixture.detectChanges();
            cmpFixture.whenStable().then(() => {
                expect(fmGrp.controls.select1.value).toBe('one');
                expect(selectOptionChildElem1.selected).toBe(true);
            });
        }));
    });
});
