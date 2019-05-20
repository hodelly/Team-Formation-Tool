import React from 'react';
// icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

library.add(faUser);


export default class Distribution extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  setSimilar = () => {
    this.props.updateDistribution(this.props.questionID, true);
  };

  setDissimilar = () => {
    this.props.updateDistribution(this.props.questionID, false);
  };


  render() {
    return (
      <div>
        <h4 className="q_header"> Distribution </h4>
        <h6 className="q_subtext"> How are students distributed accross groups? </h6>
        <button value={this.props.similar} type="button" onClick={this.setSimilar} className="distributionSelected">  Students within groups are more  <span className="blueText">similar</span>   <FontAwesomeIcon icon="user" /><FontAwesomeIcon icon="user" /><FontAwesomeIcon icon="user" /><FontAwesomeIcon icon="user" /><FontAwesomeIcon icon="user" /></button>
        <button value={this.props.similar} type="button" onClick={this.setDissimilar} className="distributionDisselected"> Students within groups are more  <span className="redText">dissimilar</span>  <FontAwesomeIcon icon="user" color="#FFFFFF" /><FontAwesomeIcon id="darkGreenUser" icon="user" /><FontAwesomeIcon id="medGreenUser" icon="user" /><FontAwesomeIcon id="lightGreenUser" icon="user" /><FontAwesomeIcon id="yellowUser" icon="user" /></button>
      </div>
    );
  }
}

//
// <p id="similar"> similar </p>
// <p id="dissimilar"> dissimilar </p>

// Note: type="range" is not supported in Internet Explorer 9 and earlier versions.
