import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GlobalState, globalStateKey } from '../../entities/global-store.entity';

const globalState = createFeatureSelector<GlobalState>(globalStateKey);

export const productsGlobalAccountsSelector = createSelector(
  globalState,
  (state: GlobalState) => state.ProductState.products
);

export const userGlobalSelector = createSelector(globalState, (state: GlobalState) => state?.UserState);
