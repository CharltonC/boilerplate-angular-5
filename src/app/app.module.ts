// Built-in Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

// Router
import { DemoRouterModule } from './ui-router/demo-router.module';

// Form
import { DemoFormModule } from './ui-form/demo-form.module';

// General Service
import { DemoDataCallService } from './service/demo-datacall-observable/demo-datacall-observable.service';

// General Components
import { AppComponent } from './app.component';
import { DemoBindingEventInputOutputComponent } from './ui-component/demo-binding-event-input-output/demo-binding-event-input-output.component';
import { DemoElementrefComponent } from './ui-component/demo-elementref/demo-elementref.component';
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

import { DemoNgrxModule } from './redux/demo/reducer';
import { DemoNgrxComponent } from './ui-component/demo-ngrx/demo-ngrx.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        HttpClientJsonpModule,
        DemoFormModule,
        DemoRouterModule,
        DemoNgrxModule
    ],
    providers: [
        DemoDataCallService
    ],
    declarations: [
        // root component
        AppComponent,

        // demo component
        DemoBindingEventInputOutputComponent,
        DemoElementrefComponent,
        DemoViewchildViewChildrenComponent,
        DemoContentchildContentChildrenComponent,

        // demo pipe/directive
        DemoLowercasePipe,
        DemoAttributeDirective,
        DemoStructuralDirective,
        DemoExportasDirective,

        // dummy
        DummyDirective,
        DummyComponent,
        DummyContainerComponent,

        // ngrx
        DemoNgrxComponent,
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
