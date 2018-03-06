import { DemoInputValidatorDirective } from './demo-input-validator.directive';

describe('DemoInputValidatorDirective', () => {
    let validator;

    beforeEach(() => {
        validator = new DemoInputValidatorDirective();
    });

    it('should create an instance', () => {
        const directive = new DemoInputValidatorDirective();
        expect(directive).toBeTruthy();
    });

    it('should return "{abc: true}" if input contains "abc" string', () => {
        const result = validator.validate({ value: '123abc3'});
        expect(result.abc).toEqual(true);
    });

    it('should return nothing if input does not contain "abc" string', () => {
        const result = validator.validate({ value: 'def'});
        expect(result).toBeFalsy(true);
    });

});
