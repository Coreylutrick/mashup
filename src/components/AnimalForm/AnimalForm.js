import React from 'react';
import PropTypes from 'prop-types';
import './AnimalForm.css';

const defaultAnimal =
{
  description: '',
  imgUrl: '',
  name: '',
};

class AnimalForm extends React.Component
{
  static propTypes =
  {
    onSubmit: PropTypes.func.isRequired,
  }
  state =
  {
    newAnimal: defaultAnimal,
  }

  formFieldStringState = (name, e) =>
  {
    const tempAnimal = {...this.state.newAnimal};
    tempAnimal[name] = e.target.value;
    this.setState({newAnimal: tempAnimal});
  }

  descriptionChange = (e) =>
  {
    this.formFieldStringState('description', e);
  };

  imgUrlChange = (e) =>
  {
    this.formFieldStringState('imgUrl', e);
  };

  nameChange = (e) =>
  {
    this.formFieldStringState('name', e);
  };

  formSubmit = (e) => {
    const {onSubmit} = this.props;
    const {newAnimal} = this.state;
    e.preventDefault();
    if (
      newAnimal.description &&
  newAnimal.imgUrl &&
  newAnimal.name)
    {
      onSubmit(this.state.newAnimal);
      this.setState(
        {
          newAnimal: defaultAnimal,
        }
      );
    } else {
      alert('poop');
    }
  }

  render ()
  {
    const {newAnimal} = this.state;
    return (
      <div className="AddAnimal">
        <h2>Add Animal</h2>
        <div className="row">
          <div className="col-sm-12">
            <form onSubmit={this.formSubmit} className="form-horizontal">
              <div className="form-group">
                <label className="col-sm-2 control-label">Name</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="animalName"
                    placeholder="Name"
                    value={newAnimal.name}
                    onChange={this.nameChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label">Image Url</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="animalImg"
                    placeholder="Image Url"
                    value={newAnimal.imgUrl}
                    onChange={this.imgUrlChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label">Description</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="animalDesc"
                    placeholder="What you be?"
                    value={newAnimal.description}
                    onChange={this.descriptionChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="submit" className="btn btn-default">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AnimalForm;
