import { shallow } from 'enzyme';
import App from './App';

describe('The components are rendered', () => {
  it('renders App component', () => {
    shallow(<App/>);
  });
});

