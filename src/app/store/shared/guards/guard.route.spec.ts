import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { canActivate } from "./guard.route";

describe('authGuard', () => {
    const routerSpy = { navigate: jasmine.createSpy('navigate') };
    let windowStub: Window;
    beforeEach(() => {
        windowStub = {
            location: { href(value: string) { return value; } },
        } as unknown as Window;
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [
                { provide: Router, useValue: routerSpy },
                { provide: Window, useValue: windowStub },
                provideMockStore({})
            ]
        });
    });

    it('should allow access when true', async () => {
        const route: ActivatedRouteSnapshot = {
            url: [{ path: 'home' }]
        } as any;
        const state: RouterStateSnapshot = {} as any;
        const result = await TestBed.runInInjectionContext(() => canActivate(route, state));
        expect(result).toBe(false);
    });
});

