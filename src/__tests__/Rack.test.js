/* eslint-disable*/
import renderer from 'react-test-renderer';
import Rack from '../__mocks__/Rack';

it('renders correctly', () => {
  const tree = renderer
    .create(<Rack />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
