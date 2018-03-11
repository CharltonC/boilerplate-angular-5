import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-demo4',
    templateUrl: './demo4.component.pug',
    styleUrls: ['./demo4.component.scss']
})
export class Demo4Component implements OnInit {
    passedProp1 = ['ONE', 'TWO', 'THREE'];
    passedProp2 = 'lorem';

    constructor() { }

    ngOnInit() {
    }

}
