import { useEffect, useState, useCallback } from 'react';
import { TextStyle } from 'react-native';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { MonsterBattleCard } from '../../components/monster-battle-card/MonsterBattleCard';
import { MonstersList } from '../../components/monsters-list/MonstersList';
import { PageTitle } from '../../components/title/Title';
import { WinnerDisplay } from '../../components/winner-display/WinnerDisplay';
import { colors } from '../../constants/colors';
import {
  fetchMonstersData,
  fetchBattleResult,
} from '../../reducers/monsters/monsters.actions';
import {
  selectMonsters,
  selectSelectedMonster,
  selectBattleResult,
} from '../../reducers/monsters/monsters.selectors';
import {
  PageContainer,
  BattleSection,
  StartBattleButton,
  StartButtonStyles,
} from './BattleOfMonsters.styled';
import { Monster } from '../../models/interfaces/monster.interface';

const BattleOfMonsters = () => {
  const dispatch = useAppDispatch();

  const monsters = useSelector(selectMonsters);
  const selectedMonster = useSelector(selectSelectedMonster);
  const battleResult = useSelector(selectBattleResult);
  const [randomMonster, SetRandomMonster] = useState<Monster | null>(null);

  useEffect(() => {
    dispatch(fetchMonstersData());
  }, []);

  const generateRandom = useCallback(() => {
    let num;
    while (!num) {
      const x = Math.floor(Math.random() * monsters.length);
      if (monsters[x].id !== selectedMonster?.id) {
        num = x;
      }
    }
    return num;
  }, [monsters, selectedMonster]);

  useEffect(() => {
    if (selectedMonster === null) {
      SetRandomMonster(null);
    } else if (monsters?.length > 0 && selectedMonster) {
      SetRandomMonster(monsters[generateRandom()]);
    }
  }, [selectedMonster, monsters, generateRandom]);
  const handleStartBattleClick = () => {
    // Fight!
    const data = {
      monster1Id: selectedMonster?.id,
      monster2Id: randomMonster?.id,
    };
    dispatch(fetchBattleResult(data));
  };

  return (
    <PageContainer>
      <PageTitle>Battle of Monsters</PageTitle>

      <MonstersList monsters={monsters} />

      <BattleSection horizontal>
        <MonsterBattleCard
          title={selectedMonster?.name || 'Player'}
          monster={selectedMonster}
        />
        <MonsterBattleCard title="Computer" monster={randomMonster} />
      </BattleSection>
      {battleResult ? (
        <WinnerDisplay text={battleResult?.name} />
      ) : (
        <StartBattleButton
          color={colors.white}
          dark={false}
          testID="start-battle-button"
          disabled={selectedMonster === null}
          labelStyle={StartButtonStyles as TextStyle}
          uppercase={false}
          onPress={handleStartBattleClick}>
          Start Battle
        </StartBattleButton>
      )}
    </PageContainer>
  );
};

export default BattleOfMonsters;
