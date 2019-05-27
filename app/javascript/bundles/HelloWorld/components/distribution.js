import React from 'react';
// icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

library.add(faUser);


export default class Importance extends React.Component {
  constructor(props) {
    super(props);
    this.state = { similar: true };
  }

  setSimilar = () => {
    this.setState(prevState => ({
      similar: true,
    }));
  };

  setDissimilar = () => {
    this.setState(prevState => ({
      similar: false,
    }));
  };


  render() {
    if (this.state.similar) {
      return (
        <div>
          <h4 className="q_header"> Distribution </h4>
          <h6 className="q_subtext"> How are students distributed accross groups? </h6>
          <button type="button" onClick={this.setSimilar} style={{ border: '4px solid #518063' }} className="distributionButton">
          Students within groups are more
            <span className="blueText">similar</span>
            <FontAwesomeIcon icon="user" />
            <FontAwesomeIcon icon="user" />
            <FontAwesomeIcon icon="user" />
            <FontAwesomeIcon icon="user" />
            <FontAwesomeIcon icon="user" />
          </button>
          <button type="button" onClick={this.setDissimilar} style={{ border: '1px solid #DEDEDE' }} className="distributionButton">
          Students within groups are more
            <span className="redText">dissimilar</span>
            <FontAwesomeIcon style={{ color: '#202C39' }} icon="user" />
            <FontAwesomeIcon style={{ color: '#254D32' }} icon="user" />
            <FontAwesomeIcon style={{ color: '#3A7D44' }} icon="user" />
            <FontAwesomeIcon style={{ color: '#69B578' }} icon="user" />
            <FontAwesomeIcon style={{ color: '#D0DB97' }} icon="user" />
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <h4 className="q_header"> Distribution </h4>
          <h6 className="q_subtext"> How are students distributed accross groups? </h6>
          <button type="button" onClick={this.setSimilar} style={{ border: '1px solid #DEDEDE' }} className="distributionButton">
          Students within groups are more
            <span className="blueText">similar</span>
            <FontAwesomeIcon icon="user" />
            <FontAwesomeIcon icon="user" />
            <FontAwesomeIcon icon="user" />
            <FontAwesomeIcon icon="user" />
            <FontAwesomeIcon icon="user" />
          </button>
          <button type="button" onClick={this.setDissimilar} style={{ border: '4px solid #518063' }} className="distributionButton">
          Students within groups are more
            <span className="redText">dissimilar</span>
            <FontAwesomeIcon style={{ color: '#202C39' }} icon="user" />
            <FontAwesomeIcon style={{ color: '#254D32' }} icon="user" />
            <FontAwesomeIcon style={{ color: '#3A7D44' }} icon="user" />
            <FontAwesomeIcon style={{ color: '#69B578' }} icon="user" />
            <FontAwesomeIcon style={{ color: '#D0DB97' }} icon="user" />
          </button>
        </div>
      );
    }
  }
}

//
// <p id="similar"> similar </p>
// <p id="dissimilar"> dissimilar </p>

// Note: type="range" is not supported in Internet Explorer 9 and earlier versions.
