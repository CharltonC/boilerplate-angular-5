import { AbstractControl } from '@angular/forms';

import { demoValidatorFn } from './demo-as-fn';

describe('DemoInputValidatorDirective', () => {
    it('should return true if input control contains "abc" string', () => {
        const mockedCtrl = { value: 'abcd'} as AbstractControl;
        expect(demoValidatorFn(mockedCtrl)).toBeTruthy();
    });

    it('should return null if input control does not contain "abc" string', () => {
        const mockedCtrl = { value: 'xyz'} as AbstractControl;
        expect(demoValidatorFn(mockedCtrl)).toBeFalsy();
    });
});
