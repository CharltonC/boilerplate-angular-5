import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { EffectsModule, Effect, Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DemoEffectService {
    // Create an Observable for an Action
    // - By Def, it will dispatch the same action,
    // use `{dispatch: false}` to stop dispatching
    @Effect({dispatch: false}) actionObsv$: Observable<Action> = this.actions$.ofType('SET_A');

    constructor(private actions$: Actions) {
        // Reducer is run first
        this.actionObsv$.subscribe(() => {
            window.console.log('action observer');
        });
    }
}

export const DemoEffectsModule = EffectsModule.forRoot([ DemoEffectService ]);
