import { TestBed } from '@angular/core/testing';
import { LoaderService } from './loader.service';

describe('LoaderService', () => {

    let loaderService: LoaderService;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        loaderService = TestBed.inject(LoaderService);
    });

    it('should show', () => {
        loaderService.show();
        expect(loaderService.isLoading).toBeDefined();
    });

    it('should hide', () => {
        loaderService.hide();
        expect(loaderService.isLoading).toBeDefined();
    });
});
