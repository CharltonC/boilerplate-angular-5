import { TestBed, inject } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { FormGroupService } from './form-group.service';

describe('FormGroupService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ FormGroupService, FormBuilder ]
        });
    });

    it('should be created', inject([FormGroupService], (service: FormGroupService) => {
        expect(service).toBeTruthy();
    }));
});
