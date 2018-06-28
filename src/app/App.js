import React, { Component } from 'react';
import AnimalForm from '../components/AnimalForm/AnimalForm';
import Animals from '../components/Animals/Animals';
import connection from '../firebaseRequests/connection';
import animalRequests from '../firebaseRequests/animals';
import './App.css';

class App extends Component
{
  state =
  {
    animals: [],
  };
  componentDidMount ()
  {
    connection();
    animalRequests.getRequest()
      .then((animals) =>
      {
        this.setState({animals});
      })
      .catch((err) =>
      {
        console.error(err);
      });
  }
  render ()
  {
    return (
      <div className="App">
        <div className="col-sm-6">
          <Animals animals={this.state.animals} />
        </div>
        <div className="col-sm-6">
          <AnimalForm />
        </div>
      </div>
    );
  }
}

export default App;
