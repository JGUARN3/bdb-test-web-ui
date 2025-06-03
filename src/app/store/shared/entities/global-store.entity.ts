import { ProductsState, UserState } from '@npm-bbta/bbog-evo-mfe-schemas-bm-lib';

export const globalStateKey = 'ShellGlobalState';

export type GlobalState = {
  UserState: UserState;
  ProductState: ProductsState;
  RemoteState: {
    remoteEntries: { [key: string]: { url: string } };
  };
};
