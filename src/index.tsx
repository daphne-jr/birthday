import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import Home from 'container/home';
import Game from 'container/game';

import 'antd/dist/antd.less';

class Root extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('root'),
);
