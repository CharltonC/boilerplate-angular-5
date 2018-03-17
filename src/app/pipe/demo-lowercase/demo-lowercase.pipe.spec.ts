import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { DemoLowercasePipe } from './demo-lowercase.pipe';
import { DummyComponent } from '../../../test-util/dummy-cmp/dummy-cmp.component';

describe('Demo for Pipe', () => {
    let pipe;

    describe('Test by Itself', () => {
        beforeEach(() => {
            pipe = new DemoLowercasePipe();
        });

        it('should create an instance', () => {
            expect(pipe).toBeTruthy();
        });

        it('should convert to lowercase', () => {
            const original = 'ABC';
            const result = pipe.transform(original);
            expect(result).toBe('abc');
        });
    });

    describe('Test with Component', () => {
        let cmpFixture: ComponentFixture<DummyComponent>,
            cmpTplElem: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [
                    DemoLowercasePipe,
                    DummyComponent
                ]
            });
        }));

        beforeEach(() => {
            const option = { set: { template: `<p>{{ 'ABC' | demoPipe}}</p>` }};
            cmpFixture = TestBed.overrideComponent(DummyComponent, option).createComponent(DummyComponent);
            cmpTplElem = cmpFixture.debugElement.nativeElement;

            cmpFixture.detectChanges();
        });

        it('should contain converted lowercase `abc` in view', () => {
            expect(cmpTplElem.textContent).toContain('abc');
        });
    });

});
