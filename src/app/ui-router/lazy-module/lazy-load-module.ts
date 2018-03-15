import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Viewtest1Component } from '../view/demo-view1/viewtest1.component';
import { Viewtest2Component } from '../view/demo-view2/viewtest2.component';

const routes: Routes = [
    { path: 'lazyview1', component: Viewtest1Component },
    {path: 'lazyview2', component: Viewtest2Component }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [
        Viewtest1Component,
        Viewtest2Component
    ],

})
export class AppRoutingModule { }
