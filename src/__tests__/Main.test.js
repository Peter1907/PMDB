import renderer from 'react-test-renderer';
import Main from '../_mocks_/Main';

it('renders correctly', () => {
  const tree = renderer
    .create(<Main />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
