import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Sidebar} from './components/sidebar/Sidebar.css';
import {Route,Link} from 'react-router-dom';
import MainPage from './map_example/main/MainPage';
import Search from './map_example/search/Search';
// import {Search} from './components/search/Search';


class App extends Component {
  render(){
    return(
      <div className="all">
        <div className="sidebar">
          <ul>
            <li><Link to="/">MAIN</Link></li>
            <li><Link to="/search"> 위치검색/등록 </Link></li>
          </ul>
        </div>
        <div className="page-area">
          <Route path="/" exact={true} component={MainPage}></Route>
          <Route path="/search" component={Search}></Route>
        </div>
      </div>
    );
  }
}

export default App;
