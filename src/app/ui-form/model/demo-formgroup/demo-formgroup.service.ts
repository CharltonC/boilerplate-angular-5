import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { demoValidatorFn } from '../../validator/demo-as-fn/demo-as-fn';

@Injectable()
export class DemoFormGroupService {
    model: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.model = this.formBuilder.group({
            reactiveInputCtrl3: [ 'input def value 3' ],
            reactiveRdoGrp: [ 'reactive-rdo2' ],
            reactiveCheckbox1: [ true ],
            reactiveCheckbox2: [ true ],
            reactiveSelect: [ 'two' ],
            grpCtrlName: this.formBuilder.group({
                reactiveInputCtrl1: [ 'input def value 1', demoValidatorFn ],
                reactiveInputCtrl2: [ 'input def value 2' ]
            })
        });
    }
}
