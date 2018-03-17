import { DummyDirective } from './dummy-dir.directive';

describe('DummyDirective', () => {
    it('should create an instance', () => {
        const directive = new DummyDirective();
        expect(directive).toBeTruthy();
    });
});
