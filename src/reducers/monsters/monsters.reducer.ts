import { createReducer } from '@reduxjs/toolkit';
import { Monster } from '../../models/interfaces/monster.interface';
import {
  fetchMonstersData,
  setSelectedMonster,
  fetchBattleResult,
} from './monsters.actions';

interface MonsterState {
  monsters: Monster[];
  selectedMonster: Monster | null;
  result: Monster | null;
}

const initialState: MonsterState = {
  monsters: [],
  selectedMonster: null,
  result: null,
};

export const monstersReducer = createReducer(initialState, builder => {
  builder.addCase(fetchMonstersData.pending, state => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.rejected, state => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.fulfilled, (state, action) => ({
    ...state,
    monsters: action.payload,
  }));

  builder.addCase(fetchBattleResult.pending, state => ({
    ...state,
    result: null,
  }));

  builder.addCase(fetchBattleResult.rejected, state => ({
    ...state,
    result: null,
  }));

  builder.addCase(fetchBattleResult.fulfilled, (state, action) => ({
    ...state,
    result: action.payload,
  }));

  builder.addCase(setSelectedMonster, (state, action) => ({
    ...state,
    result: null,
    selectedMonster: action.payload,
  }));
});
