import { AbstractControl, Validator } from '@angular/forms';

export const demoValidatorFn = (fmCtrlInst: AbstractControl): { [key: string]: boolean } => {
    if (/abc/.test(fmCtrlInst.value)) {
        return { abc: true };

    } else {
        return null;
    }
};
