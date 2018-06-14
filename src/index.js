import React from 'react';
import { render } from 'react-dom';
import { injectGlobal } from 'styled-components';

// import App from './React-Scroll';
import App from './React-Swipe';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
  }
  html, body{
    font-family: sans-serif;
  }

`;

render(<App />, document.getElementById('root'));
