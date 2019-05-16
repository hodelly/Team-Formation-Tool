import React from 'react';
// import { Map } from 'immutable';
import InputBar from './inputBar';


export default class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const options = this.props.choices.entrySeq().map(([key, value]) => {
      return (
        <InputBar
          questionID={this.props.questionID}
          inputBarID={key}
          choices={this.props.choices}

          updateChoices={this.props.updateChoices}
          addChoice={this.props.addChoice}
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
