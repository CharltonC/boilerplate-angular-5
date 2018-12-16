import { StoreModule, Action } from '@ngrx/store';

import { ITestState, defTestState } from './state';
import { ACTION } from './action.constant';

const { SET_A, SET_B, SET_C } = ACTION;

const testReducer1 = (state: ITestState = defTestState, action: Action): ITestState => {
    window.console.log('reducer');
    switch (action.type) {
        case SET_A:
            return { propName: 'A' };

        case SET_B:
            return { propName: 'B' };

        case SET_C:
            return { propName: 'C' };

        default:
            return defTestState;
    }
};

export const DemoNgrxModule = StoreModule.forRoot({
    testStore1: testReducer1,
    // testStore2: testReducer2
});
