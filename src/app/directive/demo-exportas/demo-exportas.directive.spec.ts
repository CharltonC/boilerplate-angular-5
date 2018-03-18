import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, DebugElement, Injector } from '@angular/core';

import { DemoExportasDirective } from './demo-exportas.directive';
import { DummyComponent } from '../../../test-util/dummy-cmp/dummy-cmp.component';

describe('Demo for Directive with exportas', () => {

    describe('Test by Itself', () => {
        const directive = new DemoExportasDirective();

        it('should create an instance', () => {
            expect(directive).toBeTruthy();
        });
    });

    describe('Test with Component', () => {
        let cmpFixture: ComponentFixture<DummyComponent>;
        let cmpInst: DummyComponent;
        let cmpHost: DebugElement,
            cmpTplElem: any;

        let directive, spy;

        beforeEach(async(() => {
            // NO `.compileComponents()` called here as HTML is inline
            TestBed.configureTestingModule({
                declarations: [
                    DummyComponent,
                    DemoExportasDirective
                ]
            });
        }));

        beforeEach(() => {
            const overideTemplate = `<div>
                <h1 appDemoExportas #testAppExportas="_appDemoExportas">lorem</h1>
                <p (click)="testAppExportas.methodName()"></p>
            </div>`;
            cmpFixture = TestBed.overrideComponent(DummyComponent, {set: {template: overideTemplate}}).createComponent(DummyComponent);
            cmpHost = cmpFixture.debugElement;
            cmpInst = cmpFixture.componentInstance;

            // Get directive
            const divElem = cmpHost.children[0] as DebugElement;
            directive = divElem.children[0].injector.get(DemoExportasDirective);
            spy = spyOn(directive, 'methodName');

            cmpFixture.detectChanges();
            cmpTplElem = cmpHost.nativeElement;
        });

        it('should triggered the method in the exported directive ', () => {
            cmpTplElem.querySelector('p').click();
            expect(spy).toHaveBeenCalled();
        });
    });


});
