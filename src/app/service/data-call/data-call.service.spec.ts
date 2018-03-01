import { TestBed, inject } from '@angular/core/testing';

import { DataCallService } from './data-call.service';

describe('DataCallService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [DataCallService]
        });
    });

    it('should be created', inject([DataCallService], (service: DataCallService) => {
        expect(service).toBeTruthy();
    }));
});
