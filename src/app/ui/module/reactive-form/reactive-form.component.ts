import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, AbstractControl } from '@angular/forms';

import { demoValidatorFn } from '../../../form/validator/demo/demo';

@Component({
    selector: 'app-reactive-form',
    templateUrl: './reactive-form.component.pug',
    styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
    // Approach 1 - need to instantiate with new FormGroup/FormControl + requires "name" html attr.
/*     fmGrpInst: FormGroup = new FormGroup({
        reactiveInputCtrl3: new FormControl('input def value 3')
    }); */

    // Approach 2 (no need to instantiate + not require "name" html attr.)
    fmGrpInst: FormGroup;
    constructor(public formBuilder: FormBuilder) {
        this.fmGrpInst = this.formBuilder.group({
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

    ngOnInit() {
    }

}
