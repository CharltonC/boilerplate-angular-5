import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
    selector: 'app-demo-elementref',
    templateUrl: './demo-elementref.component.pug',
    styleUrls: ['./demo-elementref.component.scss']
})
export class DemoElementrefComponent implements OnInit {

    // Get Component DOM
    constructor(public elementRef: ElementRef) {}
    ngOnInit() {
        // console.log(this.elementRef.nativeElement);
    }

}
