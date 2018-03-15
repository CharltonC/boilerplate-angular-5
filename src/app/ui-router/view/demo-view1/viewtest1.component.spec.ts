import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewtest1Component } from './viewtest1.component';

describe('Viewtest1Component', () => {
    let component: Viewtest1Component;
    let fixture: ComponentFixture<Viewtest1Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Viewtest1Component]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Viewtest1Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
