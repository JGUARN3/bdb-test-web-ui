import { TestBed } from '@angular/core/testing';
import { InterceptorService } from './interceptor.service';

describe('InterceptorService', () => {

    let interceptorService: InterceptorService;

    beforeEach(() => {
        interceptorService = TestBed.inject(InterceptorService);
    });

    it('should be created', () => {
        expect(interceptorService).toBeTruthy();
    });
});
