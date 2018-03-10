// For Testing with Component, refer to `Demo3Component` Unit Test
import { AttributeDirective } from './attribute.directive';

describe('AttributeDirective', () => {
    let directive;

    beforeEach(() => {
        directive = new AttributeDirective();
    });

    it('should create an instance', () => {
        expect(directive).toBeTruthy();
    });

    it('@HostBinding should have initial value', () => {
        expect(directive.title).toBe('demo attribute directive');
        expect(directive.bgColor).toBe('red');
        expect(directive.clsName).toBe(true);
    });
});
