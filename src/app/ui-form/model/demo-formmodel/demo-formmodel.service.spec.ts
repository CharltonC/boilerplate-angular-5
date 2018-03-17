import { TestBed, inject } from '@angular/core/testing';

import { DemoFormModelService } from './demo-formmodel.service';

describe('Demo for Form Model Service (Template-driven Form)', () => {
    let formModel;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ DemoFormModelService ]
        });
        formModel = TestBed.get(DemoFormModelService);
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
