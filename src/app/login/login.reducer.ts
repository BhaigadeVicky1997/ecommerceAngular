import { Action, createReducer, on } from '@ngrx/store';
import * as login from '../login/login.actions';


export interface State {
    home: number;
    away: number;
  }

  export const initialState: State = {
    home: 0,
    away: 0,
  };

  const scoreboardReducer = createReducer(
    initialState,
  );
  
  export function reducer(state: State | undefined, action: Action) {
    return scoreboardReducer(state, action);
  }