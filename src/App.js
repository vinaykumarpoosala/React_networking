import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationComponent from './components/NavigationComponent';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import Home from './components/Home';
import GetList from './components/GetList';
import PostForm from './components/PostForm';

function App() {
  return (
    <div className="App">
     
      <header className="container">
        <NavigationComponent />
      </header>
      <Router >
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route  path="/getList" component={GetList}></Route>
          <Route  path="/postForm" component={PostForm}></Route>

          
      
      </Switch>
      </Router>
    </div>
  );
}

export default App;
