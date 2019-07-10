import React from 'react';

import './NewScat.scss';

const defaultScat = {
  location: '',
  weight: '',
  color: '',
  sampleName: '',
  animal: '',
};

class NewScat extends React.Component {
  state = {
    newScat: defaultScat,
  }

  formFieldStringState = (name, e) => {
    const tempScat = { ...this.state.newScat };
    tempScat[name] = e.target.value;
    this.setState({ newScat: tempScat });
  }

  sampleNameChange = e => this.formFieldStringState('sampleName', e);

  colorChange = e => this.formFieldStringState('color', e);

  weightChange = e => this.formFieldStringState('weight', e);

  locationChange = e => this.formFieldStringState('location', e);

  animalChange = e => this.formFieldStringState('animal', e);

  render() {
    const { newScat } = this.state;
    return (
      <div className="NewScat">
        <h2>NewScat</h2>
        <form>
          <div className="form-group">
            <label htmlFor="sampleName">Sample Name</label>
            <input
            type="text"
            className="form-control"
            id="sampleName"
            placeholder="Sample 12"
            value={newScat.sampleName}
            onChange={this.sampleNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="color">Color</label>
            <input
            type="text"
            className="form-control"
            id="color"
            placeholder="brown"
            value={newScat.color}
            onChange={this.colorChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="weight">Weight</label>
            <input
            type="text"
            className="form-control"
            id="weight"
            placeholder="5g"
            value={newScat.weight}
            onChange={this.weightChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
            type="text"
            className="form-control"
            id="location"
            placeholder="Woods"
            value={newScat.location}
            onChange={this.locationChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="animal">Animal</label>
            <input
            type="text"
            className="form-control"
            id="animal"
            placeholder="Bear"
            value={newScat.animal}
            onChange={this.animalChange}
            />
          </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
    );
  }
}

export default NewScat;
