import React from 'react';
// import { Map } from 'immutable';
import InputBar from './inputBar';


export default class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: 2,
    };
  }

  deleteBar = (ID) => {
    // find want index value the ID is at
    if (this.state.choices.size > 1) {
      this.setState(prevState => ({
        choices: prevState.choices.delete(ID),
      }));
    }
  }

  makeNew = (string) => {
    const text = 'add option';
    this.setState(prevState => ({
      ID: prevState.ID + 1,
      choices: prevState.choices.set(prevState.ID, text),
    }));
    this.updateChoices(this.state.ID, text);
  }

  render() {
    const options = this.props.choices.entrySeq().map(([key, value]) => {
      return (
        <InputBar
          questionID={this.props.questionID}
          inputbarID={key}
          choices={this.props.choices}

          updateChoices={this.props.updateChoices}
          addChoice={this.addChoice}
        />
      );
    });
    return (
      <div>
        {options}
      </div>
    );
  }
}
