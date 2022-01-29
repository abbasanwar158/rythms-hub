import './scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/Home';
import RoutesHandle from './routes';

const renderApplication = () => {
  ReactDOM.render(
    <RoutesHandle /> ,
    document.querySelector('#root')
  );
}

renderApplication();

if (module.hot) {
  module.hot.accept("./components/routes", () => {
    renderApplication();
  });
}
