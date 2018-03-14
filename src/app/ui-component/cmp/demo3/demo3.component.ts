import { Component, ElementRef, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

import { AttributeDirective } from '../../../directive/attribute/attribute.directive';
import { DummyComponent } from '../dummy/dummy.component';

/**
 * Demo of Component working with a nested Attribute Directive/Component, includes:
 *
 * - Nested Attribute Directive's @HostBinding & @HostListener
 * - Getting Nested Directive/Component inside Component's Template
 */
@Component({
    selector: 'app-demo3',
    templateUrl: './demo3.component.pug',
    styleUrls: ['./demo3.component.scss']
})
export class Demo3Component implements AfterViewInit {

    // Get Child/Children Component or Directive used in its Template
    @ViewChild(AttributeDirective) attrDir: AttributeDirective;
    @ViewChildren(AttributeDirective) attrDirs: QueryList<AttributeDirective>;
    @ViewChild(DummyComponent) dummyCmp: DummyComponent;
    @ViewChildren(DummyComponent) dummyCmps: QueryList<DummyComponent>;

    // Access Child/Children Component or Directive here
    ngAfterViewInit() {
        // console.log(this.attrDir);
        // console.log(this.attrDirs);
    }
}
