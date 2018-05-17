import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBindingEventInputOutputComponent } from './demo-binding-event-input-output.component';

import { Component } from '@angular/core';

describe('Demo for Component with Binding, Event, @Input, @Output', () => {
    describe('Test by Itself', () => {
        let cmpInst: DemoBindingEventInputOutputComponent;
        let cmpFixture: ComponentFixture<DemoBindingEventInputOutputComponent>;
        let cmpHost, cmpInjector, cmpTplDivElem;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [ DemoBindingEventInputOutputComponent ]
            }).compileComponents();
        }));

        beforeEach(() => {
            cmpFixture = TestBed.createComponent(DemoBindingEventInputOutputComponent);
            cmpInst = cmpFixture.componentInstance;
            cmpFixture.detectChanges();

            cmpHost = cmpFixture.debugElement;
            cmpInjector = cmpHost.injector;
            cmpTplDivElem = cmpHost.nativeElement;
        });

        it('should create', () => {
            expect(cmpInst).toBeTruthy();
        });

        it('should bind property values to view', () => {
            const cmpChildElem = cmpTplDivElem.querySelector('p');
            expect(cmpChildElem.textContent).toContain(cmpInst.boundProp);

            cmpInst.boundProp = 'new default value bound prop';
            cmpFixture.detectChanges();
            expect(cmpChildElem.textContent).toContain(cmpInst.boundProp);
        });

        it('should update property with Event Handler when <p> is clicked', () => {
            const cmpChildElem = cmpTplDivElem.querySelector('p');
            expect(cmpInst.boundProp).toBe('default1');
            cmpChildElem.click();
            cmpFixture.detectChanges();
            expect(cmpInst.boundProp).toBe('new default1');
        });

        it('should pass data to the component via @Input', () => {
            const passedVal = 'lorem sum';
            cmpInst.passedVal = passedVal;
            cmpFixture.detectChanges();
            expect(cmpTplDivElem.textContent).toContain(passedVal);
        });

        it('should emit custom event via @Output', () => {
            const cmpChildElem = cmpTplDivElem.querySelector('span');

            // Subcribe to the Custom Event to see if it gets trigger, callback logic is just an example for easy testing here
            cmpInst.customEvt.subscribe((param: string) => {
                cmpInst.boundProp2 = param;
            });

            expect(cmpInst.boundProp2).toBe('default2');
            cmpChildElem.click();
            cmpFixture.detectChanges();
            expect(cmpInst.boundProp2).toBe('new default2');
        });
    });

    describe('Test @Output with a Container Component', () => {
        @Component({
            selector: 'app-mocked-component',
            template: `<app-demo-binding-event-input-output (customEvt)="onCustomEvt($event)"></app-demo-binding-event-input-output>`
        })
        class MockedComponent {
            onCustomEvt($event) {}
        }

        let cmpInst: MockedComponent;
        let cmpFixture: ComponentFixture<MockedComponent>;
        let cmpHost;
        let childCmpInst;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [
                    MockedComponent,
                    DemoBindingEventInputOutputComponent
                ]
            });
        }));

        beforeEach(() => {
            cmpFixture = TestBed.createComponent(MockedComponent);
            cmpInst = cmpFixture.componentInstance;
            cmpHost = cmpFixture.debugElement;
            childCmpInst = cmpHost.childNodes[0].componentInstance;
            cmpFixture.detectChanges();
        });

        it('should call the parent/container\'s handler with an argument', () => {
            spyOn(cmpInst, 'onCustomEvt').and.callThrough();
            childCmpInst.emitEvt();
            cmpFixture.detectChanges();
            expect(cmpInst.onCustomEvt).toHaveBeenCalledWith('new default2');
        });
    });

});


