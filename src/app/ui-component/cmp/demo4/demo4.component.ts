import { Component } from '@angular/core';

/**
 * Demo of Component working with a Structural Directive
 */
@Component({
    selector: 'app-demo4',
    templateUrl: './demo4.component.pug',
    styleUrls: ['./demo4.component.scss']
})
export class Demo4Component {
    passedProp1 = ['ONE', 'TWO', 'THREE'];
    passedProp2 = 'lorem';
}
