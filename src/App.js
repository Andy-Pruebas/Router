import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './componentes/Login';
import Registro from './componentes/Registro';
import EncDiabetes from './componentes/EncDiabetes';
import EncAnemia from './componentes/EncAnemia';
import Menu from './componentes/Menu';
import Chart from './componentes/Chart';

import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';

class App extends Component {
  render(){
    return(
      <Router>
        <Route path="/Login" component={Login}>
        <Login/>
        </Route>

        <Route path="/Registro">
        <Registro/>
        </Route>

        <Route path="/EncDiabetes">
        <EncDiabetes/>
        </Route>

        <Route path="/EncAnemia">
        <EncAnemia/>
        </Route>
        <Route path="/Grafica">
          <Chart/>
        </Route>
        <Route path="/Menu" enf="asdfasdf">
        <Menu/>
        </Route>

      </Router>
    );
  }
}

export default App;
