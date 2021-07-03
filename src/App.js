import './App.css';
import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import NavBar from './Components/NavBar';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <CountriesList />
        <Switch>
          <Route exact path="/countries/:cca3" component={CountryDetails} />
        </Switch>
      </div>
    );
  }
}
export default App;