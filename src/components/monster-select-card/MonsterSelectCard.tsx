import React from 'react';
import { Monster } from '../../models/interfaces/monster.interface';
import {
  Img,
  Container,
  MonsterSelectLineBar,
  MonsterSelectSubTitle,
  MonsterSelectTitle,
  MonsterSelectProgressBar,
  MonsterSelectBar,
} from './MonsterSelectCard.styled';

type ProgressBarProps = {
  label: string;
  value: number | undefined;
};
type MonsterSelectCardProps = {
  monster?: Monster | null;
  title?: string;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ label, value }) => {
  const widthPercent = value + '%';
  return (
    <Container>
      <MonsterSelectSubTitle>{label}</MonsterSelectSubTitle>
      <MonsterSelectBar>
        <MonsterSelectProgressBar style={{ width: widthPercent }} />
      </MonsterSelectBar>
    </Container>
  );
};

const MonsterSelectCard: React.FC<MonsterSelectCardProps> = ({ monster }) => {
  return (
    <Container testID="selected-monster-card">
      <Img
        testID="selected-monster-card-image"
        source={{ uri: monster?.imageUrl }}
      />
      <MonsterSelectTitle testID="selected-monster-card-name">
        {monster?.name}
      </MonsterSelectTitle>
      <MonsterSelectLineBar />
      <ProgressBar label="HP" value={monster?.hp} />
      <ProgressBar label="Attack" value={monster?.attack} />
      <ProgressBar label="Defense" value={monster?.defense} />
      <ProgressBar label="Speed" value={monster?.speed} />
    </Container>
  );
};

export { MonsterSelectCard };
