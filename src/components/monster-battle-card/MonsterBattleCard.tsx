import React from 'react';
import { Monster } from '../../models/interfaces/monster.interface';
import { MonsterSelectCard } from '../monster-select-card/MonsterSelectCard';
import {
  BattleMonsterCard,
  BattleMonsterTitle,
} from './MonsterBattleCard.styled';

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ title, monster }) => {
  return (
    <BattleMonsterCard>
      {monster ? (
        <MonsterSelectCard monster={monster} />
      ) : (
        <BattleMonsterTitle>{title}</BattleMonsterTitle>
      )}
    </BattleMonsterCard>
  );
};

export { MonsterBattleCard };
