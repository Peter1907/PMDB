/* eslint-disable*/
import renderer from 'react-test-renderer';
import NavBar from '../__mocks__/Navbar';

it('renders correctly', () => {
  const tree = renderer
    .create(<NavBar />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
