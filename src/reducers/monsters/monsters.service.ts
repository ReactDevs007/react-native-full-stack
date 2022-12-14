import { API_URL } from '../../constants/env';
import { Monster } from '../../models/interfaces/monster.interface';

const getAll = async (): Promise<Monster[]> =>
  await fetch(`${API_URL}/monsters`).then(response => response.json());

const getResult = async ({
  monster1Id,
  monster2Id,
}: {
  monster1Id: string;
  monster2Id: string;
}): Promise<Monster> =>
  await fetch(`${API_URL}/battle`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      monster1Id: monster1Id,
      monster2Id: monster2Id,
    }),
  })
    .then(response => response.json())
    .then(res => res?.winner);

export const MonsterService = {
  getAll,
  getResult,
};
