import React from 'react';
<<<<<<< HEAD
// icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

library.add(faUser);

=======
>>>>>>> react components on rails

export default class Importance extends React.Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
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

=======
    this.state = {
      questionWeight: 3,
    };
  }

  // handleChange = (event, value) => {
  //   this.setState({ value });
  // };


  handleSliderChange = (event) => {
    this.setState({ questionWeight: event.target.value });
  };
>>>>>>> react components on rails

  render() {
    return (
      <div>
        <h4 className="q_header"> Distribution </h4>
<<<<<<< HEAD
        <h6 className="q_subtext"> How are students distributed accross groups? </h6>
        <button type="button" onClick={this.setSimilar} className="distributionSelected">  Students within groups are more  <span className="blueText">similar</span>   <FontAwesomeIcon icon="user" /><FontAwesomeIcon icon="user" /><FontAwesomeIcon icon="user" /><FontAwesomeIcon icon="user" /><FontAwesomeIcon icon="user" /></button>
        <button type="button" onClick={this.setDissimilar} className="distributionDisselected"> Students within groups are more  <span className="redText">dissimilar</span>  <FontAwesomeIcon icon="user" color="#FFFFFF" /><FontAwesomeIcon id="darkGreenUser" icon="user" /><FontAwesomeIcon id="medGreenUser" icon="user" /><FontAwesomeIcon id="lightGreenUser" icon="user" /><FontAwesomeIcon id="yellowUser" icon="user" /></button>
=======
        <h6 className="q_subtext"> How should the algorithm distribute students with similar responses? </h6>
        <input id="range" type="range" min="0" max="6" value={this.state.questionWeight} onChange={this.handleSliderChange} />
>>>>>>> react components on rails
      </div>
    );
  }
}

//
// <p id="similar"> similar </p>
// <p id="dissimilar"> dissimilar </p>

// Note: type="range" is not supported in Internet Explorer 9 and earlier versions.
