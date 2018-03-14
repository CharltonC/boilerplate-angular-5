import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

/**
 * Demo of Component's @Input & @Output Property
 */
@Component({
    selector: 'app-demo2',
    templateUrl: './demo2.component.pug',
    styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit {
    @Input() passedVal: string;
    @Output() customEvt: EventEmitter<any> = new EventEmitter <string>();
    boundProp = 'default1';
    boundProp2 = 'default2';

    constructor() {}

    ngOnInit() {
        console.log(this.passedVal);
    }

    onClick() {
        this.boundProp = 'new default1';
    }

    emitEvt() {
        this.customEvt.emit('new default2');
    }

}
