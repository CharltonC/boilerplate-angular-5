import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { DataCallService } from './service/data-call/data-call.service';

import { AppComponent } from './app.component';
import { DemoComponent } from './ui/component/demo/demo.component';

@NgModule({
    declarations: [
        AppComponent,
        DemoComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        HttpClientJsonpModule
    ],
    providers: [
        DataCallService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
