import PropTypes from 'prop-types';
import React from 'react';

// Component to make an individual checkboz choice question
export default class CheckBoxQs extends React.Component {

  // the props that come in right now are the questions and the answers.
  // TODO: Adding in points to also give the question
  constructor(props) {
    super(props);
    //The reason I am adding a random number here is because every radio button within the same
    // question should have the same name characteristic but every question should have its own
    // name for its radio buttons. Per question I am generatingn a totally random name variable
    const randomnum = Number(99999999 * Math.random())
    const valString = "val" + String(randomnum)
    this.state= {valueString: valString}
  }

  render() {
    // Go through each of the items in the answers list and make a checkbox button
    // using the randomly generated name variable here.
    const answerRadios = this.props.answers.map(answer => {
      return <label><input type="checkbox" value="val1" name={this.state.valueString} /> {answer} </label>
    });
    //return the question and the group of checkboxes buttons
    return (
      <div>
        <p>{"Question: "+ this.props.questions}</p>
        {answerRadios}
      </div>
    );
  }
}
