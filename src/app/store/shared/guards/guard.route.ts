import { Router,  CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';

const pathAuth = 'authorizer';
export const canActivate: CanActivateFn = () => {
    const urlCurrent = sessionStorage.getItem('urlAuth') || '';
    if (urlCurrent === pathAuth) {
      return true;
    } else {
      sessionStorage.clear();
      inject(Router).navigate([ '/landing' ]);
      return false;
    }
};
export const canActivateCollaborator: CanActivateFn = () => {
    const urlCurrent = sessionStorage.getItem('urlAuthC') || '';
    if (urlCurrent === pathAuth) {
      return true;
    } else {
      sessionStorage.clear();
      inject(Router).navigate([ '/landing' ]);
      return false;
    }
};
