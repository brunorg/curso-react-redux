import React, { Component } from 'react';
import './App.css';
import Cabecalho from './components/Cabecalho'
import NavMenu from './components/NavMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cabecalho>
          <NavMenu usuario="bruno_rg" />
        </Cabecalho>
      </div >
    );
  }
}

export default App;
