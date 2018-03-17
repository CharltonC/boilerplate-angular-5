import { Injectable } from '@angular/core';

@Injectable()
export class DemoFormModelService {
    demoInput = 'input def text';
    demoRdoGrp = 'rdo1';
    demoCheckboxGrp = {
        one: true,
        two: true
    };
    demoSelect = 'two';

    constructor() { }

}
