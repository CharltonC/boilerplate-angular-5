import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { DemoView3Component } from './demo-view3.component';

describe('DemoView3Component', () => {
    let component: DemoView3Component;
    let fixture: ComponentFixture<DemoView3Component>;
    const mockedActivetedRoute = { snapshot: { data: 'test' }};

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: ActivatedRoute, useValue: mockedActivetedRoute }
            ],
            declarations: [DemoView3Component]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DemoView3Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
