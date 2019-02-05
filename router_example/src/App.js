import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/sidebar/Sidebar.css';
import {Route, Link} from 'react-router-dom';

import Contributor from './components/contributors/Contributor';
import MainPage from './components/main/MainPage';
import Search from './components/search/Search';
import Contributors from './components/contributors/Contributors';

class App extends Component {
  render() {
    return (
      <div className="all">
        <div className="sidebar">
          <ul>
            <li><Link to="/">Main Area</Link></li>
            <li><Link to="/contributors"> Contributors </Link></li>
            <li><Link to="/search"> Search </Link></li>
          </ul>
        </div>
        <div className="page-area">
          <Route path="/" exact={true} component={MainPage}></Route>
          <Route path="/contributors" component={Contributors}></Route>
          <Route path="/search" component={Search}></Route>
        </div>
      </div>
    );
  }
}

export default App;
