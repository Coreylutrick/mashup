import React from 'react';
import './Animals.css';

class Animals extends React.Component
{
  render ()
  {
    const {animals} = this.props;
    const animalItemComponents = animals.map((animal) =>
    {
      return (
        <li key = {animal.name}>
          <img alt="mashup" src={animal.imgUrl} />
          <h3>{animal.name}</h3>
          <p>{animal.description}</p>
        </li>
      );
    });
    return (
      <div className="Animals">
        <h2>Animals</h2>
        <ul>
          {animalItemComponents}
        </ul>
      </div>
    );
  }
}

export default Animals;
