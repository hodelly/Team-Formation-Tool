import React from 'react';
// font awesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

library.add(faTimes, faCircle);


export default class inputBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onInputChange = (event) => {
  //  this.setState({ text: event.target.value });
    this.props.updateChoices(this.props.questionID, this.props.inputbarID, event.target.value);
    // console.log(`text: ${event.target.value}\n`);
  //  this.onSubmit(event.target.value);
  }


  onKeyDown = (event) => {
    // if the user presses enter, call the makeNew function in Options
    // that creates a new bar and adds it to the existing list
    if (event.keyCode === 13) {
      this.props.addChoice(this.props.questionID, this.props.inputbarID);
    }
  }

  handleDelete = () => {
    this.props.deleteBar(this.props.id);
  }


  handleFocus = event => event.target.select();

  render() {
    // console.log(`choices for that question: ${this.props.choices}`);
    return (
      <div>
        <FontAwesomeIcon icon={['far', 'circle']} /> <input autoFocus type="options" value={this.props.choices.get(this.props.inputbarID)} onChange={this.onInputChange} onKeyDown={this.onKeyDown} onFocus={this.handleFocus} id={this.props.id} />
        <button type="button" onClick={this.handleDelete}> <FontAwesomeIcon icon="times" /> </button>
      </div>
    );
  }
}
