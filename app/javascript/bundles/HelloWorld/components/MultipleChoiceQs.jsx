import PropTypes from 'prop-types';
import React from 'react';

// Component to make an individual multiple choice question
export default class MultipleChoiceQs extends React.Component {

  // the props that come in right now are the questions and the answers.
  // TODO: Adding in points to also give the question
  constructor(props) {
    super(props);
  }

  render() {
    // Go through each of the items in the answers list and make a radio button
    const answerRadios = this.props.answers.map(answer => {
      return <label><input type="radio" value="val1" name="group1" /> {answer} </label>
    });
    //return the question and the group of radio buttons
    return (
      <div>
        <p>{"Question: "+ this.props.questions}</p>
        {answerRadios}
      </div>
    );
  }
}
