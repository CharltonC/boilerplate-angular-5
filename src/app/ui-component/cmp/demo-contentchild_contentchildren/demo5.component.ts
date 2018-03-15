import { Component, OnInit, ContentChild, AfterViewInit, AfterContentInit, ElementRef } from '@angular/core';

import { DummyComponent } from '../../../test-util/dummy-cmp/dummy.component';

@Component({
    selector: 'app-demo5',
    templateUrl: './demo5.component.pug',
    styleUrls: ['./demo5.component.scss']
})
export class Demo5Component implements OnInit, AfterViewInit, AfterContentInit {
    @ContentChild(DummyComponent) dummyCmp: DummyComponent;

    // Access its Own Component Dom
    constructor(public elem: ElementRef) {}
    ngOnInit() {

    }

    // Access its nested Component/Directive in its own Template
    ngAfterViewInit() {

    }

    // Access the Component/Directive in the passed Content
    ngAfterContentInit() {
        // console.log(this.dummyCmp);
    }
}
