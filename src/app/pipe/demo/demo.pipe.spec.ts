import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { DemoPipe } from './demo.pipe';
import { DummyComponent } from '../../ui-component/cmp/dummy/dummy.component';

describe('DemoPipe', () => {
    let pipe;

    describe('Test by itself', () => {
        beforeEach(() => {
            pipe = new DemoPipe();
        });

        it('create an instance', () => {
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
                    DemoPipe,
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

        it('should contain converted lowercase `abc`', () => {
            expect(cmpTplElem.textContent).toContain('abc');
        });
    });

});
