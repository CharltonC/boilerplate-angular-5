import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { DataCallService } from '../../../service/data-call/data-call.service';

// 1. implements Resolve<rtnTypeInsidePromiseResolveOrObservableRtn>
// 2. return promise in `resolve`
// 3. Access in ngOnInit via this.activatedRoute.data.value
@Injectable()
export class DataCallResolverService implements Resolve<object> {

    constructor(private dataCallService: DataCallService) {}

    resolve(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): Promise<any> {
        return this.dataCallService.getJsonData();
    }
}
