import React from 'react';

export default class Importance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleSliderChange = (event) => {
    this.props.updateImportance(this.props.questionID, event.target.value);
  };

  render() {
    return (
      <div>
        <h4 className="q_header"> Priority Level </h4>
        <h6 className="q_subtext"> In forming groups, how important are the students’ answers to this question? </h6>
        <div className="priorityBar">
          <span className="blueText"> Not Important </span>
          <span> Somewhat Important </span>
          <span className="redText"> Very Important </span>
        </div>
        <input id="range" type="range" min="0" max="6" value={this.props.importance} onChange={this.handleSliderChange} />
      </div>
    );
  }
}
