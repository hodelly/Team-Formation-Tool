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
    this.props.updateChoices(this.props.questionID, this.props.inputBarID, event.target.value);
  }


  onKeyDown = (event) => {
    // if the user presses enter, add a new Option
    if (event.keyCode === 13) {
      this.props.addChoice(this.props.questionID, this.props.choices.size);
    }
  }

  handleDelete = () => {
    this.props.deleteChoice(this.props.questionID, this.props.inputBarID);
  }


  handleFocus = event => event.target.select();

  render() {
    // console.log(`choices for that question: ${this.props.choices}`);
    return (
      <div>
        <FontAwesomeIcon icon={['far', 'circle']} />
        {' '}
        <input autoFocus type="options" value={this.props.choices.get(this.props.inputBarID)} onChange={this.onInputChange} onKeyDown={this.onKeyDown} onFocus={this.handleFocus} />
        <button type="button" onClick={this.handleDelete}>
          <FontAwesomeIcon icon="times" />
        </button>
      </div>
    );
  }
}
