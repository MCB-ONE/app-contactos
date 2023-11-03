import { Injectable } from "@angular/core";
import { TipoEntidadContacto } from '@app/core/models/TipoEntidadContacto ';
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { of } from "rxjs";
import { map, catchError, switchMap, mergeMap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { environment } from "@app/enveiroments/environment.dev";
import { ListActions } from "./list.actions";


@Injectable()
export class ListEffects {

  readAll$ = createEffect(() =>
  this.actions$.pipe(
    ofType(ListActions.readAllStart),
    mergeMap(() =>
      this.httpClient.get<TipoEntidadContacto[]>(`${environment.url}/TipoEntidadContactos?`)
        .pipe(
          map((data: any) =>
          ListActions.readAllSuccess({ data }),
          ),
          catchError(error => of(ListActions.readAllError({ error })))
        )
    )
  )
);

  constructor(
    private actions$: Actions,
    private httpClient: HttpClient
  ) { }

}