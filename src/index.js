import React from 'react';
import { render } from 'react-dom';
import { Header } from 'semantic-ui-react';
import 'semantic-ui-less/semantic.less';
import './style.less';

const Index = () => <Header as='h1'>Hello semantic ui react</Header>;

render(
  <Index />,
  document.getElementById('root')
);
