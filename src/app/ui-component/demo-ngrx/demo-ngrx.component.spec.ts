import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, DebugElement, Injector } from '@angular/core';

import { DemoNgrxComponent } from './demo-ngrx.component';

describe('DemoNgrxComponent', () => {
    let cmpFixture: ComponentFixture<DemoNgrxComponent>;
    let cmpHost: DebugElement;
    let cmpInst: DemoNgrxComponent;
    let cmpInjector: Injector;
    let cmpTplElem: any;

    beforeEach(async(() => {
        // Note `.compileComponents()` is for external html file only (not required for inline)
        TestBed.configureTestingModule({
            // schemas: [ NO_ERRORS_SCHEMA ],
            // imports: [],
            // providers: [],
            declarations: [
                DemoNgrxComponent,
                // <Any-directive-or-pipe-etc>
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        cmpFixture = TestBed.createComponent(DemoNgrxComponent);
        cmpHost = cmpFixture.debugElement;
        cmpInst = cmpFixture.componentInstance;

        // Get any Directive Instance which is applied to any children element
        // - e.g. <directiveInstance> = cmpHost.childNodes[<elementIndexInTemplate>].injector.get(<DirectiveName>);

        // Spy any if required (prior to any directive is applied and View is populated with Changes)
        // - e.g. spy = SpyOn(<obj>, '<method-name>');
        // - e.g. spy = SpyOnProperty(<obj>, '<property-name>', '<getOrSetType>');

        // Populate Changes to the View (applying any directive)
        cmpFixture.detectChanges();

        // Get the DOM (self & chidrene etc) after Changes are populated to the View & any directive/pipe/etc has been applied to the Element
        cmpTplElem = cmpHost.nativeElement;
    });

    it('should create', () => {
        expect(cmpInst).toBeTruthy();
    });
});
