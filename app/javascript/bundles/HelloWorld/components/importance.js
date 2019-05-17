import React from 'react';

export default class Importance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // questionWeight: 3,
    };
  }

  handleSliderChange = (event) => {
    this.props.updateImportance(this.props.questionID, event.target.value);
  };

  render() {
    return (
      <div>
        <h4 className="q_header"> Priority Level </h4>
        <h6 className="q_subtext"> How strongly do you want the algorithm to consider this question? </h6>

        <input id="range" type="range" min="0" max="6" value={this.props.importance} onChange={this.handleSliderChange} />


      </div>
    );
  }
}
