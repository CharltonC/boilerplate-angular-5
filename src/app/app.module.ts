// Built-in Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Router
import { ROUTES_CONFIG } from './ui-router/config/config';
import { DataCallResolverService } from './ui-router/guard/data-call-resolver/data-call-resolver.service';
import { Viewtest1Component } from './ui-router/view/viewtest1/viewtest1.component';
import { Viewtest2Component } from './ui-router/view/viewtest2/viewtest2.component';
import { Viewtest3Component } from './ui-router/view/viewtest3/viewtest3.component';

// Form
import { FormModelService } from './ui-form/model/form-model/form-model.service';
import { DemoInputValidatorDirective } from './ui-form/validator/demo-directive/demo-input-validator.directive';
import { TemplateFormComponent } from './ui-form/cmp/template-form/template-form.component';
import { ReactiveFormComponent } from './ui-form/cmp/reactive-form/reactive-form.component';

// General Service
import { DataCallService } from './service/data-call/data-call.service';

// General Components
import { AppComponent } from './app.component';
import { DemoComponent } from './ui-component/cmp/demo/demo.component';
import { Demo2Component } from './ui-component/cmp/demo2/demo2.component';
import { Demo3Component } from './ui-component/cmp/demo3/demo3.component';

// General Pipe
import { DemoPipe } from './pipe/demo/demo.pipe';
import { AttributeDirective } from './directive/attribute/attribute.directive';
import { StructuralDirective } from './directive/structural/structural.directive';


@NgModule({
    imports: [
        BrowserModule,
        // RouterModule.forRoot(ROUTES_CONFIG, { enableTracing: true }),
        RouterModule.forRoot(ROUTES_CONFIG),
        HttpClientModule,
        HttpClientJsonpModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        DataCallService,
        DataCallResolverService,
        FormModelService
    ],
    declarations: [
        AppComponent,
        Viewtest1Component,
        Viewtest2Component,
        Viewtest3Component,
        DemoComponent,
        Demo2Component,
        Demo3Component,
        TemplateFormComponent,
        ReactiveFormComponent,
        DemoInputValidatorDirective,
        DemoPipe,
        AttributeDirective,
        StructuralDirective
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
