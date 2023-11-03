import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ListState } from "./list.reducer";


export const tipoEntidadContactoListFeatureKey = 'tipoEntidadContacto';

const getListState = createFeatureSelector<ListState>(tipoEntidadContactoListFeatureKey)

export const getTipo = createSelector(
  getListState,
  (state: ListState) => state.entidadContacto
)

export const getLoading = createSelector(
  getListState,
  (state: ListState) => state.loading
)

export const getError = createSelector(
  getListState,
  (state: ListState) => state.error
)