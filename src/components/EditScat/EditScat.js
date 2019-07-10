import React from 'react';

import scatsData from '../../helpers/data/scatData';
import './EditScat.scss';

const defaultScat = {
  location: '',
  weight: '',
  color: '',
  sampleName: '',
  animal: '',
  uid: '',
};

class EditScat extends React.Component {
  state = {
    newScat: defaultScat,
  }

  componentDidMount() {
    const scatId = this.props.match.params.id;
    scatsData.getSingleScat(scatId)
      .then(scatPromise => this.setState({ newScat: scatPromise.data }))
      .catch(error => console.error('could not find single scat', error));
  }

  formFieldStringState = (name, e) => {
    const tempScat = { ...this.state.newScat };
    tempScat[name] = e.target.value;
    this.setState({ newScat: tempScat });
  }

  locationChange = e => this.formFieldStringState('location', e);

  weightChange = e => this.formFieldStringState('weight', e);

  colorChange = e => this.formFieldStringState('color', e);

  sampleNameChange = e => this.formFieldStringState('sampleName', e);

  animalChange = e => this.formFieldStringState('animal', e);

  formSubmit = (e) => {
    e.preventDefault();
    const saveMe = { ...this.state.newScat };
    const scatId = this.props.match.params.id;
    scatsData.putScat(saveMe, scatId)
      .then(() => this.props.history.push('/home'))
      .catch(error => console.error('unable to save', error));
  }

  render() {
    const { newScat } = this.state;
    return (
      <div className="NewScat">
        <h2>Edit Scat</h2>
        <form onSubmit={this.formSubmit}>
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
              placeholder="Brown"
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
              placeholder="12g"
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
              placeholder="The Moon"
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
              placeholder="Moose"
              value={newScat.animal}
              onChange={this.animalChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Update Scat</button>
        </form>
      </div>
    );
  }
}

export default EditScat;
