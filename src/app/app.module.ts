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
import { FormModelService } from './ui-form/model/demo-formmodel/form-model.service';
import { DemoInputValidatorDirective } from './ui-form/validator/demo-directive/demo-input-validator.directive';
import { TemplateFormComponent } from './ui-form/cmp/demo-templateform/template-form.component';
import { FormGroupService } from './ui-form/model/demo-formgroup/form-group.service';
import { ReactiveFormComponent } from './ui-form/cmp/demo-reactiveform/reactive-form.component';

// General Service
import { DataCallService } from './service/demo-datacall/data-call.service';

// General Components
import { AppComponent } from './app.component';
import { Demo2Component } from './ui-component/cmp/demo-binding_event_input_output/demo2.component';
import { Demo3Component } from './ui-component/cmp/demo-viewchild_n_viewchildren/demo3.component';
import { Demo5Component } from './ui-component/cmp/demo-contentchild_contentchildren/demo5.component';

// General Pipe
import { DemoPipe } from './pipe/demo/demo.pipe';
import { AttributeDirective } from './directive/demo-attribute/attribute.directive';
import { StructuralDirective } from './directive/demo-structural/structural.directive';
import { ExportasDirective } from './directive/demo-exportas/exportas.directive';

// Test used
import { DummyComponent } from './test-util/dummy-cmp/dummy.component';
import { DummyContainerComponent } from './test-util/dummy-cmp-container/dummy-container.component';
import { DummyDirective } from './test-util/dummy-directive/dummy.directive';


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
        FormModelService,
        FormGroupService
    ],
    declarations: [
        AppComponent,
        Viewtest1Component,
        Viewtest2Component,
        Viewtest3Component,
        Demo2Component,
        Demo3Component,
        Demo5Component,
        TemplateFormComponent,
        ReactiveFormComponent,
        DemoInputValidatorDirective,
        DemoPipe,
        AttributeDirective,
        StructuralDirective,
        ExportasDirective,

        DummyDirective,
        DummyComponent,
        DummyContainerComponent,
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
