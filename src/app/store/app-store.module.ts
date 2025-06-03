import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducerMap } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([])
  ]
})
export class AppStoreModule {}

export const initialDataFeatureName = 'PagMfeInitState';
export interface RequestStatusState {
  main: {},
}

export const appModuleState: ActionReducerMap<RequestStatusState> = {
  main: {} as any,
};