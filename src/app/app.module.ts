import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DemoComponent } from './ui/component/demo/demo.component';

@NgModule({
    declarations: [
        AppComponent,
        DemoComponent,
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
