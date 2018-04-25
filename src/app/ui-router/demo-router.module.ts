// Built-in Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Router
import { ROUTES_CONFIG } from './config/default.config';
import { DemoDataCallResolverService } from './guard/demo-datacall-resolver/demo-datacall-resolver.service';

// General Service
import { DemoDataCallService } from './../service/demo-datacall/demo-datacall.service';

// View
import { DemoView1Component } from './view/demo-view1/demo-view1.component';
import { DemoView2Component } from './view/demo-view2/demo-view2.component';
import { DemoView3Component } from './view/demo-view3/demo-view3.component';


@NgModule({
    imports: [
        BrowserModule,
        // RouterModule.forRoot(ROUTES_CONFIG, { enableTracing: true }),
        RouterModule.forRoot(ROUTES_CONFIG)
    ],
    providers: [
        DemoDataCallService,
        DemoDataCallResolverService,
    ],
    declarations: [
        DemoView1Component,
        DemoView2Component,
        DemoView3Component
    ],
    exports: [
        RouterModule
    ]
})
export class DemoRouterModule { }
