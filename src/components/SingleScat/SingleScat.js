import React from 'react';

import './SingleScat.scss';
import scatData from '../../helpers/data/scatData';

class SingleScat extends React.Component {
  state = {
    scat: {},
  }

  componentDidMount() {
    const scatId = this.props.match.params.id;
    scatData.getSingleScat(scatId)
      .then(scatPromise => this.setState({ scat: scatPromise.data }))
      .catch(err => console.error('unable to get single scat', err));
  }

  deleteScat = () => {
    const scatId = this.props.match.params.id;
    scatData.deleteScat(scatId)
      .then(() => this.props.history.push('/home'))
      .catch(err => console.error('unable to delete', err));
  };

  render() {
    const { scat } = this.state;
    return (
      <div className="SingleScat">
        <h2>{scat.sampleName}</h2>
        <h2>{scat.location}</h2>
        <h3>{scat.animal}</h3>
        <h3>{scat.color}</h3>
        <h3>{scat.weight}</h3>
        <button className="btn btn-danger" onClick={this.deleteScat}>Delete</button>
    </div>
    );
  }
}

export default SingleScat;
