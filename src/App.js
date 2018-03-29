import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import Faukemon from './components/Faukemon'
import LitHop from './components/LitHop'
import HatPics from './components/HatPics'
import './App.css';
import Bio from './containers/Bio'
import { Message, Button } from 'semantic-ui-react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Home from './containers/Home';
import NavBar from './components/NavBar';
import Projects from './containers/Projects';


class App extends Component {


  render() {
    console.log('app props', this.props)
    return (
      <div className="App">
        <NavBar />

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/Bio' component={Bio}/>
          <Route path='/Projects' component={Projects}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {

  return {...state}
}

export default withRouter(connect(mapStateToProps, actions)(App));
