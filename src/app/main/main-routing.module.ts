import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/ncm/pages/home-admin/home.component';
import { LandingComponent } from "./modules/ncm/pages/landing/landing.component";
import { AuthComponent } from "./modules/ncm/pages/auth/auth.component";
import { canActivate } from "../store/shared/guards/guard.route";
import { ErrorComponent } from "./modules/shared/components/error/error.component";
import { HomeCollaboratorComponent } from "./modules/ncm/pages/home-collaborator/home-collaborator.component";
import { canActivateCollaborator } from "../store/shared/guards/guard.route";

export const MfeRoutes: Routes = [
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'validation',
    component: AuthComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [canActivate]
  },
  {
    path: 'home-collaborator',
    component: HomeCollaboratorComponent,
    canActivate: [canActivateCollaborator]
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: '',
    component: LandingComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(MfeRoutes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
