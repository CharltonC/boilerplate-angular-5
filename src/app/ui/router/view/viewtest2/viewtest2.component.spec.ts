import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewtest2Component } from './viewtest2.component';

describe('Viewtest2Component', () => {
    let component: Viewtest2Component;
    let fixture: ComponentFixture<Viewtest2Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Viewtest2Component]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Viewtest2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
