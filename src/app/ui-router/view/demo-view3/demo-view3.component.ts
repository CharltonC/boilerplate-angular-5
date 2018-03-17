import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-viewtest3',
    templateUrl: './demo-view3.component.pug',
    styleUrls: ['./demo-view3.component.scss']
})
export class DemoView3Component implements OnInit {
    testProp: object;

    constructor(public route: ActivatedRoute) { }

    ngOnInit() {
        this.testProp = this.route.snapshot.data;
    }

}
