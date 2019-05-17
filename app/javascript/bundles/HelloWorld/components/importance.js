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


// <form action="">
//   <input type="radio" name="importance" value="other" /> This question has no weight on the group selection.<br />
//   <input type="radio" name="importance" value="low" /> Low<br />
//   <input type="radio" name="importance" value="normal" /> Normal<br />
//   <input type="radio" name="importance" value="importance" /> Important<br />
//   <input type="radio" name="importance" value="critical" /> Critical
// </form>
