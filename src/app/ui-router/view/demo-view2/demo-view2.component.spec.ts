import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoView2Component } from './demo-view2.component';

describe('DemoView2Component', () => {
    let component: DemoView2Component;
    let fixture: ComponentFixture<DemoView2Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DemoView2Component]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DemoView2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
