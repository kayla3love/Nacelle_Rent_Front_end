import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import LoadContainers from '../webLoad/LoadContainers'
import Content from '../webControl/Content'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={LoadContainers}/>
        <Route exact path="/manager" component={Content}/>
      </div>
    );
  }
}

export default App;
