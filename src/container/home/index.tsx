import { NavigationBar } from 'container/home/navigation-bar';
import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        Home
        {' '}
        <Link to="/game">game</Link>
      </div>
    );
  }
}
