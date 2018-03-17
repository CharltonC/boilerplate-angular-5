import { Component, OnInit } from '@angular/core';
import { DemoFormModelService } from '../../model/demo-formmodel/demo-formmodel.service';

@Component({
    selector: 'app-demo-template-form',
    templateUrl: './demo-templateform.component.pug',
    styleUrls: ['./demo-templateform.component.scss']
})
export class DemoTemplateFormComponent implements OnInit {
    constructor(public formModel: DemoFormModelService) { }

    ngOnInit() {
    }

    onSubmit(fm) {
        // console.log(fm);
    }

}
