import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, AbstractControl } from '@angular/forms';

import { demoValidatorFn } from '../../validator/demo-as-fn/demo-as-fn';
import { DemoFormGroupService } from '../../model/demo-formgroup/demo-formgroup.service';

@Component({
    selector: 'app-demo-reactive-form',
    templateUrl: './demo-reactiveform.component.pug',
    styleUrls: ['./demo-reactiveform.component.scss']
})
export class DemoReactiveFormComponent implements OnInit {
    // Approach 1 - need to instantiate with new FormGroup/FormControl + requires "name" html attr.
/*     fmGrpInst: FormGroup = new FormGroup({
        reactiveInputCtrl3: new FormControl('input def value 3')
    }); */

    // Approach 2 (no need to instantiate + not require "name" html attr.)
    fmGrpInst: FormGroup;
    constructor(public formBuilder: FormBuilder, public fmGrp: DemoFormGroupService) {
        this.fmGrpInst = this.fmGrp.model;
    }

    ngOnInit() {
    }

}
