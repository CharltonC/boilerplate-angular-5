import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import { ITestState } from '../../redux/demo/state';
import { ACTION } from '../../redux/demo/action.constant';

@Component({
    selector: 'app-demo-ngrx',
    templateUrl: './demo-ngrx.component.pug',
    styleUrls: ['./demo-ngrx.component.scss']
})
export class DemoNgrxComponent implements OnInit {
    testStore1$: Observable<ITestState>;

    constructor(private store: Store<{testStore1: ITestState}>) {
        // Retrieve the substore from `StoreModule` (async)
        this.testStore1$ = this.store.select('testStore1');
    }

    ngOnInit() {
    }

    setToA() {
        this.store.dispatch({type: ACTION.SET_A});
    }
}
