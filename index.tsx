import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import UseState from './UseState';
import UseEffect from './UseEffect';
import UseRef from './UseRef';
import UseStateAgain from './UseStateAgain';
import UseReducer from './UseReducer';
import CustomHooks from './CustomHooks';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <UseState />
    <UseEffect />
    <UseRef />
    <UseStateAgain />
    <UseReducer />
    <CustomHooks />
  </StrictMode>
);
