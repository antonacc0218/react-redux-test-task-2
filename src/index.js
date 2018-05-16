import React from 'react';
import { render } from 'react-dom';
import './style.css';

const Index = () => <div>Hello React!</div>;

render(
  <Index />,
  document.getElementById('root')
);

