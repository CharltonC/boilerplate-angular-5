import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-viewtest3',
    templateUrl: './viewtest3.component.pug',
    styleUrls: ['./viewtest3.component.scss']
})
export class Viewtest3Component implements OnInit {
    testProp: object;

    constructor(public route: ActivatedRoute) { }

    ngOnInit() {
        this.testProp = this.route.snapshot.data;
    }

}
