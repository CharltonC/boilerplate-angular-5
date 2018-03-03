import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { Viewtest3Component } from './viewtest3.component';

describe('Viewtest3Component', () => {
    let component: Viewtest3Component;
    let fixture: ComponentFixture<Viewtest3Component>;
    const mockedActivetedRoute = { snapshot: { data: 'test' }};

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: ActivatedRoute, useValue: mockedActivetedRoute }
            ],
            declarations: [Viewtest3Component]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Viewtest3Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
