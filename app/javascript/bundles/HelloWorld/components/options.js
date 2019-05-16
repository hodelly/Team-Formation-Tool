import React from 'react';
// import { Map } from 'immutable';
import InputBar from './inputBar';


export default class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputBarID: 3,
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

  addChoice = () => {
    // update ID
    this.setState(prevState => ({
      inputBarID: prevState.inputBarID + 1,
    }));

    this.props.addChoice(this.props.questionID, this.state.inputBarID); // LEARNING: prev state updates state before moving on indeed!
  }


  render() {
    const options = this.props.choices.entrySeq().map(([key, value]) => {
      return (
        <InputBar
          questionID={this.props.questionID}
          inputBarID={key}
          choices={this.props.choices}

          updateChoices={this.props.updateChoices}
          addChoice={this.addChoice}
          deleteChoice={this.props.deleteChoice}
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
