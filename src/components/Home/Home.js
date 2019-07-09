import React from 'react';
// import { Link } from 'react-router-dom';

import firebase from 'firebase/app';
import 'firebase/auth';

import scatData from '../../helpers/data/scatData';
import ScatCard from '../ScatCard/ScatCard';

import './Home.scss';

class Home extends React.Component {
  state = {
    scats: [],
  }

  getScats = () => {
    const { uid } = firebase.auth().currentUser;
    scatData.getScats(uid)
      .then(scats => this.setState({ scats }))
      .catch(err => console.error('could not get scats', err));
  }

  componentDidMount() {
    this.getScats();
  }

  editEvent = (e) => {
    e.preventDefault();
    const orderId = '12345';
    this.props.history.push(`/edit/${orderId}`);
  };

  deleteScat = (scatId) => {
    scatData.deleteScat(scatId)
      .then(() => this.getScats())
      .catch(err => console.error('unable to delete', err));
  };

  render() {
    const makeScatCards = this.state.scats.map(scat => (
      <ScatCard
      key={scat.id}
      scat={scat}
      deleteScat={this.deleteScat}
      />
    ));
    return (
      <div className="Home col">
        <h2>Home</h2>
        <div className="d-flex">
        {makeScatCards}
        </div>
    </div>
    );
  }
}

export default Home;
