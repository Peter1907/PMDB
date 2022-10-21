/* eslint-disable*/
import renderer from 'react-test-renderer';
import Filter from '../__mocks__/Filter';

it('renders correctly', () => {
  const tree = renderer
    .create(<Filter />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
