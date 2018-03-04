import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { ROUTES_CONFIG } from './router/config';

import { DataCallService } from './service/data-call/data-call.service';
import { DataCallResolverService } from './service/data-call-resolver/data-call-resolver.service';

import { Viewtest1Component } from './ui/view/viewtest1/viewtest1.component';
import { Viewtest2Component } from './ui/view/viewtest2/viewtest2.component';
import { Viewtest3Component } from './ui/view/viewtest3/viewtest3.component';
import { AppComponent } from './app.component';
import { DemoComponent } from './ui/component/demo/demo.component';
import { Demo2Component } from './ui/component/demo2/demo2.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES_CONFIG, { enableTracing: true }),
        HttpClientModule,
        HttpClientJsonpModule
    ],
    providers: [
        DataCallService,
        DataCallResolverService
    ],
    declarations: [
        AppComponent,
        DemoComponent,
        Viewtest1Component,
        Viewtest2Component,
        Viewtest3Component,
        Demo2Component
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
