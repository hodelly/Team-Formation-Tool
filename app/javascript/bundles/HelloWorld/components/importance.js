import React from 'react';

export default class Importance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h4 className="q_header"> Priority Level </h4>
        <h6 className="q_subtext"> How strongly do you want the algorithm to consider this question? </h6>

        <form action="">
          <input type="radio" name="importance" value="other" /> This question has no weight on the group selection.<br />
          <input type="radio" name="importance" value="low" /> Low<br />
          <input type="radio" name="importance" value="normal" /> Normal<br />
          <input type="radio" name="importance" value="importance" /> Important<br />
          <input type="radio" name="importance" value="critical" /> Critical
        </form>

      </div>
    );
  }
}
