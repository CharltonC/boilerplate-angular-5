// Built-in Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Router
import { ROUTES_CONFIG } from './ui-router/config/default.config';
import { DemoDataCallResolverService } from './ui-router/guard/demo-datacall-resolver/demo-datacall-resolver.service';
import { DemoView1Component } from './ui-router/view/demo-view1/demo-view1.component';
import { DemoView2Component } from './ui-router/view/demo-view2/demo-view2.component';
import { DemoView3Component } from './ui-router/view/demo-view3/demo-view3.component';

// Form
import { DemoFormModelService } from './ui-form/model/demo-formmodel/demo-formmodel.service';
import { DemoInputValidatorDirective } from './ui-form/validator/demo-as-directive/demo-as-directive.directive';
import { DemoTemplateFormComponent } from './ui-form/cmp/demo-templateform/demo-templateform.component';
import { DemoFormGroupService } from './ui-form/model/demo-formgroup/demo-formgroup.service';
import { DemoReactiveFormComponent } from './ui-form/cmp/demo-reactiveform/demo-reactiveform.component';

// General Service
import { DemoDataCallService } from './service/demo-datacall/demo-datacall.service';

// General Components
import { AppComponent } from './app.component';
import { DemoBindingEventInputOutputComponent } from './ui-component/demo-binding-event-input-output/demo-binding-event-input-output.component';
import { DemoViewchildViewChildrenComponent } from './ui-component/demo-viewchild-viewchildren/demo-viewchild-viewchildren.component';
import { DemoContentchildContentChildrenComponent } from './ui-component/demo-contentchild-contentchildren/demo-contentchild-contentchildren.component';

// General Pipe
import { DemoLowercasePipe } from './pipe/demo-lowercase/demo-lowercase.pipe';

// General Directive
import { DemoAttributeDirective } from './directive/demo-attribute/demo-attribute.directive';
import { DemoStructuralDirective } from './directive/demo-structural/demo-structural.directive';
import { DemoExportasDirective } from './directive/demo-exportas/demo-exportas.directive';

// Test used
import { DummyComponent } from '../test-util/dummy-cmp/dummy-cmp.component';
import { DummyContainerComponent } from '../test-util/dummy-cmp-container/dummy-cmp-container.component';
import { DummyDirective } from '../test-util/dummy-dir/dummy-dir.directive';
import { DemoElementrefComponent } from './ui-component/demo-elementref/demo-elementref.component';


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
        DemoDataCallService,
        DemoDataCallResolverService,
        DemoFormModelService,
        DemoFormGroupService
    ],
    declarations: [
        AppComponent,
        DemoView1Component,
        DemoView2Component,
        DemoView3Component,
        DemoBindingEventInputOutputComponent,
        DemoViewchildViewChildrenComponent,
        DemoContentchildContentChildrenComponent,
        DemoTemplateFormComponent,
        DemoReactiveFormComponent,
        DemoInputValidatorDirective,
        DemoLowercasePipe,
        DemoAttributeDirective,
        DemoStructuralDirective,
        DemoExportasDirective,

        DummyDirective,
        DummyComponent,
        DummyContainerComponent,
        DemoElementrefComponent,
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
