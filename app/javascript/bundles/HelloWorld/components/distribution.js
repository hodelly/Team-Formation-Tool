import React from 'react';

export default class Importance extends React.Component {
  constructor(props) {
    super(props);
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

  render() {
    return (
      <div>
        <h4 className="q_header"> Distribution </h4>
        <h6 className="q_subtext"> How should the algorithm distribute students with similar responses? </h6>
        <input id="range" type="range" min="0" max="6" value={this.state.questionWeight} onChange={this.handleSliderChange} />
      </div>
    );
  }
}

//
// <p id="similar"> similar </p>
// <p id="dissimilar"> dissimilar </p>

// Note: type="range" is not supported in Internet Explorer 9 and earlier versions.
