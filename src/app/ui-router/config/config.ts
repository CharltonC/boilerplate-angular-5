import { RouterModule, Routes } from '@angular/router';

import { DataCallResolverService } from '../guard/demo-datacall-resolver/data-call-resolver.service';

import { Viewtest1Component } from '../view/demo-view1/viewtest1.component';
import { Viewtest2Component } from '../view/demo-view2/viewtest2.component';
import { Viewtest3Component } from '../view/demo-view3/viewtest3.component';

export const ROUTES_CONFIG: Routes = [
    {
        path: '',
        component: Viewtest1Component
    },
    {
        path: 'test2',
        component: Viewtest2Component
    },
    {
        path: 'test3',
        component: Viewtest3Component,
        resolve: [ DataCallResolverService ]
    },
    {
        path: 'test4/:id',
        component: Viewtest1Component
    },
    {
        path: '**',
        redirectTo: '',
        component: Viewtest1Component
    }
];
