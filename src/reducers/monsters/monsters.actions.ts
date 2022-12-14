import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Monster } from '../../models/interfaces/monster.interface';
import { MonsterService } from './monsters.service';

export const fetchMonstersData = createAsyncThunk<Monster[]>(
  'monsters/fetchMonstersData',
  MonsterService.getAll,
);

export const fetchBattleResult = createAsyncThunk<Monster>(
  'monsters/fetchBattleResult',
  MonsterService.getResult,
);

export const setSelectedMonster = createAction<Monster | null>(
  'monsters/setSelectedMonster',
);
