import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
    selector: 'app-demo5',
    templateUrl: './demo5.component.pug',
    styleUrls: ['./demo5.component.scss']
})
export class Demo5Component implements OnInit, AfterViewInit {
    // Access its Own Dom
    constructor(public elem: ElementRef) {}
    ngOnInit() {

    }

    // Access its Children (incl. passed content)
    ngAfterViewInit() {

    }
}
