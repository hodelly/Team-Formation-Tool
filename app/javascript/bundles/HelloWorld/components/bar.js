import React from 'react';
// font awesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

library.add(faTimes, faCircle);


export default class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.initialText,
      id: this.props.id,
    };
  }

  onInputChange = (event) => {
    this.setState({ text: event.target.value });
    this.props.updateChoices(this.state.id, event.target.value);
  }

  onKeyDown = (event) => {
    // if the user presses enter, call the makeNew function in Options
    // that creates a new bar and adds it to the existing list
    if (event.keyCode === 13) {
      this.props.makeNew();
    }
  }

  handleDelete = () => {
    this.props.deleteBar(this.state.id);
  }


  handleFocus = event => event.target.select();

  render() {
    return (
      <div>
        <FontAwesomeIcon icon={['far', 'circle']} /> <input autoFocus type="options" value={this.state.text} onChange={this.onInputChange} onKeyDown={this.onKeyDown} onFocus={this.handleFocus} id={this.state.id} />
        <button type="button" onClick={this.handleDelete}> <FontAwesomeIcon icon="times" /> </button>
      </div>
    );
  }
}
