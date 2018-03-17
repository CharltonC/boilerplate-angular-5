import { RouterModule, Routes } from '@angular/router';

import { DemoDataCallResolverService } from '../guard/demo-datacall-resolver/demo-datacall-resolver.service';

import { DemoView1Component } from '../view/demo-view1/demo-view1.component';
import { DemoView2Component } from '../view/demo-view2/demo-view2.component';
import { DemoView3Component } from '../view/demo-view3/demo-view3.component';

export const ROUTES_CONFIG: Routes = [
    {
        path: '',
        component: DemoView1Component
    },
    {
        path: 'test2',
        component: DemoView2Component
    },
    {
        path: 'test3',
        component: DemoView3Component,
        resolve: [ DemoDataCallResolverService ]
    },
    {
        path: 'test4/:id',
        component: DemoView1Component
    },
    {
        path: '**',
        redirectTo: '',
        component: DemoView1Component
    }
];
