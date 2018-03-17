import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { DemoDataCallService } from '../../../service/demo-datacall/demo-datacall.service';

// 1. implements Resolve<rtnTypeInsidePromiseResolveOrObservableRtn>
// 2. return promise in `resolve`
// 3. Access in ngOnInit via this.activatedRoute.data.value
@Injectable()
export class DemoDataCallResolverService implements Resolve<object> {

    constructor(private dataCallService: DemoDataCallService) {}

    resolve(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): Promise<any> {
        return this.dataCallService.getJsonData();
    }
}
