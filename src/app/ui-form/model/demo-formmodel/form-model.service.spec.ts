import { TestBed, inject } from '@angular/core/testing';

import { FormModelService } from './form-model.service';

describe('FormModelService', () => {
    let formModel;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ FormModelService ]
        });
        formModel = TestBed.get(FormModelService);
    });

    it('should be created', () => {
        expect(formModel).toBeTruthy();
    });

    it('should have default property values', () => {
        expect(formModel.demoInput).toBe('input def text');
        expect(formModel.demoRdoGrp).toBe('rdo1');
        expect(formModel.demoCheckboxGrp.one).toBe(true);
        expect(formModel.demoCheckboxGrp.two).toBe(true);
        expect(formModel.demoSelect).toBe('two');
    });
});
