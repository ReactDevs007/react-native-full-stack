import { render, screen } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { MonsterBattleCard } from './MonsterBattleCard';
import monstersData from '../../../server/monsters.json';
import { Monster } from '../../models/interfaces/monster.interface';
const mockSetSelectedMonster = jest.fn();
jest.mock('../../app/hooks', () => ({
  useAppDispatch: () => mockSetSelectedMonster,
}));

const monstersListFactory = (data: Monster | null, title: string) => {
  render(
    <Provider store={store}>
      <MonsterBattleCard monster={data} title={title} />
    </Provider>,
  );
};

describe('MonstersList', () => {
  it('should render the correct card', () => {
    monstersListFactory(
      monstersData.monsters[0],
      monstersData.monsters[0].name,
    );
    expect(screen.queryByTestId('selected-monster-card')).not.toBeNull();
    expect(
      screen.getByTestId('selected-monster-card-name').props.children,
    ).toEqual(monstersData.monsters[0].name);

    expect(
      screen.getByTestId('selected-monster-card-image').props.source.uri,
    ).toBe(monstersData.monsters[0].imageUrl);
  });

  it('should not render the card when the title is Player', () => {
    monstersListFactory(null, 'Player');
    expect(screen.queryByTestId('selected-monster-card')).toEqual(null);
  });

  it('should not render the card when title is Computer', () => {
    monstersListFactory(null, 'Computer');
    expect(screen.queryByTestId('selected-monster-card')).toEqual(null);
  });

});
