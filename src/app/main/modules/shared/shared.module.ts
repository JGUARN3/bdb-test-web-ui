import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { NmcLoaderComponent } from "./components/nmc-loader/nmc-loader.component";

@NgModule({
  imports: [CommonModule, RouterOutlet, NmcLoaderComponent,
    EffectsModule.forFeature([])],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {
}
