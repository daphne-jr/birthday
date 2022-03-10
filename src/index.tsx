import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  HashRouter, Route, Routes,
} from 'react-router-dom';
import Home from 'container/home';
import Game from 'container/game';
import { Canvas } from 'container/canvas';

import './styles/default.less';
import 'antd/dist/antd.dark.less';

class Root extends React.Component {
  render() {
    return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="game" element={<Game />} />
          <Route path="canvas" element={<Canvas />} />
        </Routes>
      </HashRouter>
    );
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('root'),
);
