import styled from '@emotion/native';
import { Card, Title } from 'react-native-paper';
import { colors } from '../../constants/colors';

export const BattleMonsterCard = styled(Card)`
  padding: 10px 10px;
  width: 255px;
  height: 350px;
  background: ${colors.white};
  border-radius: 7px;
  border: 0.5px solid #dddddd;
  flex-direction: column;
  display: flex;
  margin-right: 18px;
  margin-bottom: 37px;
  elevation: 5;
`;

export const BattleMonsterTitle = styled(Title)`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
  margin: auto;
  color: ${colors.black};
`;
