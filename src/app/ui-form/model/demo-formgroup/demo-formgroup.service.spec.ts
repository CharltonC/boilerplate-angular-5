import { TestBed, inject } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { DemoFormGroupService } from './demo-formgroup.service';

describe('DemoFormGroupService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ DemoFormGroupService, FormBuilder ]
        });
    });

    it('should be created', inject([DemoFormGroupService], (service: DemoFormGroupService) => {
        expect(service).toBeTruthy();
    }));
});
