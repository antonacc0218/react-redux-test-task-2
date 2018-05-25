import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount, render, shallow } from 'enzyme';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;
