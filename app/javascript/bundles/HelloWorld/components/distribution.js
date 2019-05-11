import React from 'react';

export default class Importance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // handleChange = (event, value) => {
  //   this.setState({ value });
  // };


  render() {
    return (
      <div>
        <h4 className="q_header"> Distribution </h4>
        <h6 className="q_subtext"> How are students distributed accross groups? </h6>
        <input type="radio" /> Students within groups are more similar
        <input type="radio" /> Students within groups are more dissimilar
      </div>
    );
  }
}

//
// <p id="similar"> similar </p>
// <p id="dissimilar"> dissimilar </p>

// Note: type="range" is not supported in Internet Explorer 9 and earlier versions.
