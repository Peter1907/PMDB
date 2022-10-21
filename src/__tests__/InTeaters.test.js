/* eslint-disable*/
import renderer from 'react-test-renderer';
import InTheaters from '../__mocks__/InTheaters';

it('renders correctly', () => {
  const tree = renderer
    .create(<InTheaters />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
