import { TipoEntidadContacto } from "@app/core/models/TipoEntidadContacto ";
import { createActionGroup, emptyProps, props } from "@ngrx/store";


export const ListActions = createActionGroup({
  source: 'TipoEntidadContacto',
  events: {
    // Get all
    'Read all start': emptyProps(),
    'Read all success': props<{ data: TipoEntidadContacto[] | any }>(),
    'Read all error': props<{ error: string }>()
  },
});