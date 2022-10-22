import renderer from 'react-test-renderer';
import Rack from '../_mocks_/Rack';

it('renders correctly', () => {
  const tree = renderer
    .create(<Rack />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
