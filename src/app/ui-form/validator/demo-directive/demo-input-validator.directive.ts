import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
    selector: '[appDemoInputValidator][ngModel]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: DemoInputValidatorDirective,
            multi: true
        }
    ]
})
export class DemoInputValidatorDirective implements Validator {

    constructor() {}

    validate(fmCtrlInst: AbstractControl): { [key: string]: boolean }   {
        if (/abc/.test(fmCtrlInst.value)) {
            return { abc: true };

        } else {
            return null;
        }
    }
}
