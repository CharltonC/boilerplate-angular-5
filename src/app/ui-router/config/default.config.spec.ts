import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed , fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, APP_BASE_HREF } from '@angular/common';

import { ROUTES_CONFIG } from './default.config';
import { DemoDataCallService } from '../../service/demo-datacall/demo-datacall.service';
import { DemoDataCallResolverService } from '../guard/demo-datacall-resolver/demo-datacall-resolver.service';

import { AppComponent } from '../../app.component';
import { DemoView1Component } from '../view/demo-view1/demo-view1.component';
import { DemoView2Component } from '../view/demo-view2/demo-view2.component';
import { DemoView3Component } from '../view/demo-view3/demo-view3.component';

describe('Router Config', () => {

    let cmpFixture, cmpHost, cmpTplDivElem;
    let router, location, activatedRoute, dataCallService, demoDataCallResolverService;

    const mockedRtnPromise = Promise.resolve({data: 'lorem sum'});
    const mockedDemoDataCallService = {
        getJsonData: () => mockedRtnPromise
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ RouterTestingModule.withRoutes(ROUTES_CONFIG) ],
            providers: [
                // required if <base href=”/”> is not in the component html
                { provide: APP_BASE_HREF, useValue : '/' },
                { provide: DemoDataCallService, useValue: mockedDemoDataCallService },
                DemoDataCallResolverService
            ],
            // View Container & View Components
            declarations: [
                AppComponent,
                DemoView1Component,
                DemoView2Component,
                DemoView3Component
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
        dataCallService = TestBed.get(DemoDataCallService);
        demoDataCallResolverService = TestBed.get(DemoDataCallResolverService);

        cmpFixture.detectChanges();
    });

    it('should navigate to home page', (done) => {
        router.navigateByUrl('/').then(() => {
            cmpFixture.detectChanges();
            const currRoute = activatedRoute.snapshot.firstChild;

            expect(location.path()).toBe('/');
            expect(currRoute.component).toBe(DemoView1Component);
            expect(cmpTplDivElem.textContent).toContain('viewtest1 works!');
            done();
        });
    });

    it('should redirect to home page', (done) => {
        router.navigateByUrl('/loremsum').then(() => {
            cmpFixture.detectChanges();
            const currRoute = activatedRoute.snapshot.firstChild;

            expect(location.path()).toBe('/');
            expect(currRoute.component).toBe(DemoView1Component);
            expect(cmpTplDivElem.textContent).toContain('viewtest1 works!');
            done();
        });
    });

    it('should navigate to path "test2"', (done) => {
        router.navigateByUrl('/test2').then(() => {
            cmpFixture.detectChanges();
            const currRoute = activatedRoute.snapshot.firstChild;

            expect(location.path()).toBe('/test2');
            expect(currRoute.component).toBe(DemoView2Component);
            expect(cmpTplDivElem.textContent).toContain('viewtest2 works!');
            done();
        });
    });

    it('should navigate to path "test2" when matching anchor is clicked', fakeAsync(() => {
        cmpTplDivElem.querySelector('#test2').click();
        cmpFixture.whenStable().then(() => {
            cmpFixture.detectChanges();
            const currRoute = activatedRoute.snapshot.firstChild;
            expect(location.path()).toBe('/test2');
            expect(currRoute.component).toBe(DemoView2Component);
            expect(cmpTplDivElem.textContent).toContain('viewtest2 works!');
        });
    }));

    it('should navigate to path "test3" with resolver', (done) => {
        spyOn(demoDataCallResolverService, 'resolve').and.callThrough();
        // there is NO NEED to call DemoDataCallResolverService.resolve() here becoz router.navigate alreadys trigger the call
        router.navigateByUrl('/test3').then(() => {
            const call = demoDataCallResolverService.resolve.calls.mostRecent(),
                arg1 = call.args[0],
                arg2 = call.args[1],
                rtnVal = call.returnValue;

            expect(rtnVal).toBe(mockedRtnPromise);
            expect(arg1).toBe(activatedRoute.snapshot.firstChild);
            expect(arg2).toBe(router.routerState.snapshot);
            done();
        });
    });

    it('should navigate to path "test4" with Param', (done) => {
        const path = '/test4',
            pathParam = 'something',
            queryParam = { queryParams: {id: '123'} };

        // equivalent: router.navigateByUrl('/test4/something?id=123').then(...)
        router.navigate([path, pathParam], queryParam).then(() => {
            cmpFixture.detectChanges();
            const currRoute = activatedRoute.snapshot.firstChild;

            expect(location.path()).toBe('/test4/something?id=123');
            expect(currRoute.paramMap.get('id')).toBe(pathParam);
            expect(currRoute.queryParamMap.get('id')).toBe('123');
            expect(currRoute.component).toBe(DemoView1Component);
            expect(cmpTplDivElem.textContent).toContain('viewtest1 works!');
            done();
        });
    });
});
