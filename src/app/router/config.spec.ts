import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed , fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, APP_BASE_HREF } from '@angular/common';

import { ROUTES_CONFIG } from './config';
import { DataCallService } from '../service/data-call/data-call.service';
import { DataCallResolverService } from '../service/data-call-resolver/data-call-resolver.service';
import { AppComponent } from '../app.component';
import { Viewtest1Component } from '../ui/view/viewtest1/viewtest1.component';
import { Viewtest2Component } from '../ui/view/viewtest2/viewtest2.component';
import { Viewtest3Component } from '../ui/view/viewtest3/viewtest3.component';

describe('Router Config', () => {

    let cmpFixture, cmpHost, cmpTplDivElem;
    let router, location, activatedRoute, dataCallService, dataCallResolverService;

    const mockedRtnPromise = Promise.resolve({data: 'lorem sum'});
    const mockedDataCallService = {
        getJsonData: () => mockedRtnPromise
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ RouterTestingModule.withRoutes(ROUTES_CONFIG) ],
            providers: [
                // required if <base href=”/”> is not in the component html
                { provide: APP_BASE_HREF, useValue : '/' },
                { provide: DataCallService, useValue: mockedDataCallService },
                DataCallResolverService
            ],
            declarations: [
                AppComponent,
                Viewtest1Component,
                Viewtest2Component,
                Viewtest3Component
            ],
            schemas: [ NO_ERRORS_SCHEMA ]
        }).compileComponents();
    }));

    beforeEach(() => {
        cmpFixture = TestBed.createComponent(AppComponent);
        cmpHost = cmpFixture.debugElement;
        cmpTplDivElem = cmpHost.nativeElement;

        router = TestBed.get(Router);
        location = TestBed.get(Location);
        activatedRoute = TestBed.get(ActivatedRoute);
        dataCallService = TestBed.get(DataCallService);
        dataCallResolverService = TestBed.get(DataCallResolverService);

        cmpFixture.detectChanges();
    });

    it('should navigate to home page', (done) => {
        router.navigateByUrl('/').then(() => {
            cmpFixture.detectChanges();
            const currRoute = activatedRoute.snapshot.firstChild;

            expect(location.path()).toBe('/');
            expect(currRoute.component).toBe(Viewtest1Component);
            expect(cmpTplDivElem.textContent).toContain('viewtest1 works!');
            done();
        });
    });

    it('should redirect to home page', (done) => {
        router.navigateByUrl('/lorem sum').then(() => {
            cmpFixture.detectChanges();
            const currRoute = activatedRoute.snapshot.firstChild;

            expect(location.path()).toBe('/');
            expect(currRoute.component).toBe(Viewtest1Component);
            expect(cmpTplDivElem.textContent).toContain('viewtest1 works!');
            done();
        });
    });

    it('should navigate to path "test2"', (done) => {
        router.navigateByUrl('/test2').then(() => {
            cmpFixture.detectChanges();
            const currRoute = activatedRoute.snapshot.firstChild;

            expect(location.path()).toBe('/test2');
            expect(currRoute.component).toBe(Viewtest2Component);
            expect(cmpTplDivElem.textContent).toContain('viewtest2 works!');
            done();
        });
    });

    it('should navigate to path "test3" with resolver', (done) => {
        spyOn(dataCallResolverService, 'resolve').and.callThrough();
        // there is NO NEED to call dataCallResolverService.resolve() here becoz router.navigate alreadys trigger the call
        router.navigateByUrl('/test3').then(() => {
            const call = dataCallResolverService.resolve.calls.mostRecent(),
                arg1 = call.args[0],
                arg2 = call.args[1],
                rtnVal = call.returnValue;

            expect(rtnVal).toBe(mockedRtnPromise);
            expect(arg1).toBe(activatedRoute.snapshot.firstChild);
            expect(arg2).toBe(router.routerState.snapshot);
            done();
        });
    });
});
