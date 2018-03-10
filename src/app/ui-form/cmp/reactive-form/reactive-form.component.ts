import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, AbstractControl } from '@angular/forms';

import { demoValidatorFn } from '../../validator/demo-fn/demo';
import { FormGroupService } from '../../model/form-group/form-group.service';

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
    constructor(public formBuilder: FormBuilder, public fmGrp: FormGroupService) {
        this.fmGrpInst = this.fmGrp.model;
    }

    ngOnInit() {
    }

}
