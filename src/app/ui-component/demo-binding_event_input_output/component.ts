import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

/**
 * Demo of Component's Binding, @Input, @Output, Event
 */
@Component({
    selector: 'app-demo-binding-event-input-output',
    templateUrl: './component.pug',
    styleUrls: ['./component.scss']
})
export class DemoBindingEventInputOutputComponent implements OnInit {
    @Input() passedVal: string;
    @Output() customEvt: EventEmitter<any> = new EventEmitter <string>();
    boundProp = 'default1';
    boundProp2 = 'default2';

    constructor() {}

    ngOnInit() {
        // console.log(this.passedVal);
    }

    onClick() {
        this.boundProp = 'new default1';
    }

    emitEvt() {
        this.customEvt.emit('new default2');
    }

}
