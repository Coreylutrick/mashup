import React, { Component } from 'react';
import AnimalForm from '../components/AnimalForm/AnimalForm';
import Animals from '../components/Animals/Animals';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="col-sm-6">
          <Animals />
        </div>
        <div className="col-sm-6">
          <AnimalForm />
        </div>
      </div>
    );
  }
}

export default App;
