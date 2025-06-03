import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NmcLoaderComponent } from './nmc-loader.component';
import { LoaderService } from "../../services/loader/loader.service";


describe('LoaderComponent', () => {

    let component: NmcLoaderComponent;
    let loaderService: LoaderService;
    let fixture: ComponentFixture<NmcLoaderComponent>;
    beforeEach(async () => {
        fixture = TestBed.createComponent(NmcLoaderComponent);
        component = fixture.componentInstance;
        loaderService = TestBed.inject(LoaderService);
        fixture.detectChanges();
    });

    it('should create show', async () => {
        component.loader.nativeElement = {
            openLoader: () => {
                return undefined;
            },
        };
        loaderService.show();
        component.ngOnInit();
        expect(component).toBeTruthy();
    });
    it('should create hide', async () => {
        component.loader.nativeElement = {
            closeLoader: () => {
                return undefined;
            },
        };
        loaderService.hide();
        component.ngOnInit();
        expect(component).toBeTruthy();
    });
});
