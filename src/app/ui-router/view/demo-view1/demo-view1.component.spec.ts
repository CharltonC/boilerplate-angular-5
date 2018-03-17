import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoView1Component } from './demo-view1.component';

describe('DemoView1Component', () => {
    let component: DemoView1Component;
    let fixture: ComponentFixture<DemoView1Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DemoView1Component]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DemoView1Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
