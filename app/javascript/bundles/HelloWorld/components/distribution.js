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
          <div className="distributionButtons">
            <button type="button" onClick={this.setSimilar} style={{ border: '4px solid #518063' }} className="distributionButton">
            Students within groups will share
              <span className="blueText"> similar responses </span>  <br />
              <FontAwesomeIcon className="userIcon" icon="user" />
              <FontAwesomeIcon className="userIcon" icon="user" />
              <FontAwesomeIcon className="userIcon" icon="user" />  <br />
              <FontAwesomeIcon className="userIcon" icon="user" />
              <FontAwesomeIcon className="userIcon" icon="user" />
            </button>
            <button type="button" onClick={this.setDissimilar} style={{ border: '1px solid #DEDEDE' }} className="distributionButton">
            Students within groups will have
              <span className="redText"> dissimilar responses</span> <br />
              <FontAwesomeIcon style={{ color: '#202C39', fontSize: '15px', padding: '2px' }} icon="user" />
              <FontAwesomeIcon style={{ color: '#254D32', fontSize: '15px', padding: '2px' }} icon="user" />
              <FontAwesomeIcon style={{ color: '#3A7D44', fontSize: '15px', padding: '2px' }} icon="user" />  <br />
              <FontAwesomeIcon style={{ color: '#69B578', fontSize: '15px', padding: '2px' }} icon="user" />
              <FontAwesomeIcon style={{ color: '#D0DB97', fontSize: '15px', padding: '2px' }} icon="user" />
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h4 className="q_header"> Distribution </h4>
          <h6 className="q_subtext"> How are students distributed accross groups? </h6>
          <div className="distributionButtons">
            <button type="button" onClick={this.setSimilar} style={{ border: '1px solid #DEDEDE' }} className="distributionButton">
            Students within groups will share
              <span className="blueText"> similar responses </span>  <br />
              <FontAwesomeIcon className="userIcon" icon="user" />
              <FontAwesomeIcon className="userIcon" icon="user" />
              <FontAwesomeIcon className="userIcon" icon="user" /> <br />
              <FontAwesomeIcon className="userIcon" icon="user" />
              <FontAwesomeIcon className="userIcon" icon="user" />
            </button>
            <button type="button" onClick={this.setDissimilar} style={{ border: '4px solid #518063' }} className="distributionButton">
            Students within groups will have
              <span className="redText"> dissimilar responses</span> <br />
              <FontAwesomeIcon style={{ color: '#202C39', fontSize: '15px', padding: '2px' }} icon="user" />
              <FontAwesomeIcon style={{ color: '#254D32', fontSize: '15px', padding: '2px' }} icon="user" />
              <FontAwesomeIcon style={{ color: '#3A7D44', fontSize: '15px', padding: '2px' }} icon="user" />
              <FontAwesomeIcon style={{ color: '#69B578', fontSize: '15px', padding: '2px' }} icon="user" /> <br />
              <FontAwesomeIcon style={{ color: '#D0DB97', fontSize: '15px', padding: '2px' }} icon="user" />
            </button>
          </div>
        </div>
      );
    }
  }
}

//
// <p id="similar"> similar </p>
// <p id="dissimilar"> dissimilar </p>

// Note: type="range" is not supported in Internet Explorer 9 and earlier versions.
