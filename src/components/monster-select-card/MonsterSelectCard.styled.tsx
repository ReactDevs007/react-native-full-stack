import styled from '@emotion/native';
import { View, Image, Text } from 'react-native';
import { colors } from '../../constants/colors';

export const MonsterSelectBar = styled(View)`
  height: 7px;
  background: ${colors.progressBarBackground};
  border-radius: 4px;
  flex-direction: column;
  display: flex;
  margin-bottom: 8px;
  elevation: 1;
`;

export const Container = styled(View)`
  margin: 0px;
`;

export const MonsterSelectProgressBar = styled(View)`
  height: 7px;
  border-radius: 4px;
  background: ${colors.progressColor};
`;

export const MonsterSelectLineBar = styled(View)`
  height: 0px;
  margin-top: 3px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 6px;
`;

export const MonsterSelectTitle = styled(Text)`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
  margin-top: 10px;
  color: ${colors.black};
`;

export const MonsterSelectSubTitle = styled(Text)`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: ${colors.black};
  margin-bottom: 3px;
`;

export const Img = styled(Image)`
  border-radius: 7px;
  width: 235px;
  height: 148px;
  elevation: 5;
`;