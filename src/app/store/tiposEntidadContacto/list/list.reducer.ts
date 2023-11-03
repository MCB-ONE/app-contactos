import { createReducer, on } from '@ngrx/store';
import { ListActions } from './list.actions';
import { TipoEntidadContacto } from '@app/core/models/TipoEntidadContacto ';



export interface ListState {
  entidadContacto: TipoEntidadContacto[] | null;
  loading: boolean | null;
  error: string | null;
}

export const initialState: ListState = {
    entidadContacto: null,
  loading: null,
  error: null
}


export const listReducer = createReducer(
  initialState,
  on(ListActions.readAllStart, (state) => {
    return {
      ...state,
      loading: true,
      error: null
    }
  }),
  on(ListActions.readAllSuccess, (state, { data }) => {
    return {
      ...state,
      loading: false,
      entidadContacto: data,
      error: null
    }
  }),
  on(ListActions.readAllError, (state, { error }) => {
    return {
      ...state,
      loading: false,
      error: error
    }
  })
)