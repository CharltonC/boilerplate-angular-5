import { Component, ContentChild, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

import { DummyComponent } from '../../../test-util/dummy-cmp/dummy.component';
import { DummyDirective } from '../../../test-util/dummy-directive/dummy.directive';

@Component({
    selector: 'app-demo-contentchild-contentchildren',
    templateUrl: './component.pug',
    styleUrls: ['./component.scss']
})
export class DemoContentchildContentChildrenComponent implements AfterContentInit {
    @ContentChild(DummyComponent) dummyCmp: DummyComponent;
    @ContentChildren(DummyComponent) dummyCmps: QueryList<DummyComponent>;
    @ContentChild(DummyDirective) dummyDir: DummyDirective;
    @ContentChildren(DummyDirective) dummyDirs: QueryList<DummyDirective>;

    // Access the Component/Directive in the passed Content (Unlike Directive/Componet inside its own template which is accessed via @ViewChid/@ViewChildren in ngAfterViewInit)
    ngAfterContentInit() {
        // console.log(this.dummyCmp);
    }
}
