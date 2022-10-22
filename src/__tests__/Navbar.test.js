import renderer from 'react-test-renderer';
import NavBar from '../_mocks_/Navbar';

it('renders correctly', () => {
  const tree = renderer
    .create(<NavBar />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
