// Built-in Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Form
import { DemoFormModelService } from './model/demo-formmodel/demo-formmodel.service';
import { DemoInputValidatorDirective } from './validator/demo-as-directive/demo-as-directive.directive';
import { DemoTemplateFormComponent } from './cmp/demo-templateform/demo-templateform.component';
import { DemoFormGroupService } from './model/demo-formgroup/demo-formgroup.service';
import { DemoReactiveFormComponent } from './cmp/demo-reactiveform/demo-reactiveform.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        DemoFormModelService,
        DemoFormGroupService
    ],
    declarations: [
        DemoTemplateFormComponent,
        DemoReactiveFormComponent,
        DemoInputValidatorDirective
    ],
    bootstrap: [],
    exports: [
        DemoTemplateFormComponent,
        DemoReactiveFormComponent,
        DemoInputValidatorDirective
    ]
})
export class DemoFormModule { }
