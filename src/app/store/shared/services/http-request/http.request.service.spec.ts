import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpRequestService } from './http-request.service';

describe('HttpRequestService', () => {

    let service: HttpRequestService<any>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                HttpRequestService,
                HttpClientTestingModule,
                HttpClient,

            ]
        });
        service = TestBed.inject(HttpRequestService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should call request', () => {
        const params = {};
        expect(service.request('/', params, 'get')).toBeDefined();
        expect(service.request('/', params, 'post')).toBeDefined();
        expect(service.request('/')).toBeDefined();
    });

});
