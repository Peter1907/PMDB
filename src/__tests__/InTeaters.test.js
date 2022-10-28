import renderer from 'react-test-renderer';
import InTheaters from '../_mocks_/InTheaters';

it('renders correctly', () => {
  const tree = renderer
    .create(<InTheaters />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
