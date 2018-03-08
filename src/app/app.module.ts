import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ROUTES_CONFIG } from './router/config';

import { DataCallService } from './service/data-call/data-call.service';
import { DataCallResolverService } from './service/data-call-resolver/data-call-resolver.service';
import { FormModelService } from './service/form-model/form-model.service';

import { Viewtest1Component } from './ui/view/viewtest1/viewtest1.component';
import { Viewtest2Component } from './ui/view/viewtest2/viewtest2.component';
import { Viewtest3Component } from './ui/view/viewtest3/viewtest3.component';

import { AppComponent } from './app.component';
import { DemoComponent } from './ui/component/demo/demo.component';
import { Demo2Component } from './ui/component/demo2/demo2.component';

import { TemplateFormComponent } from './ui/module/template-form/template-form.component';
import { ReactiveFormComponent } from './ui/module/reactive-form/reactive-form.component';

import { DemoInputValidatorDirective } from './directive/demo-input-validator/demo-input-validator.directive';
import { DemoPipe } from './pipe/demo/demo.pipe';


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
        TemplateFormComponent,
        ReactiveFormComponent,
        DemoInputValidatorDirective,
        DemoPipe
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
