import { Component, OnInit } from '@angular/core';
import { FormModelService } from '../../model/form-model/form-model.service';

@Component({
    selector: 'app-template-form',
    templateUrl: './template-form.component.pug',
    styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
    constructor(public formModel: FormModelService) { }

    ngOnInit() {
    }

    onSubmit(fm) {
        console.log(fm);
    }

}
