/* eslint-disable*/
import renderer from 'react-test-renderer';
import Main from '../__mocks__/Main';

it('renders correctly', () => {
  const tree = renderer
    .create(<Main />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
