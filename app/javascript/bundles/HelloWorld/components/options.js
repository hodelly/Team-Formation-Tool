import React from 'react';
import { Map } from 'immutable';
import Bar from './bar';


export default class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 2,
      choices: Map(),
    };
  }

  componentWillMount() {
    // look through the choices sent to initialize with
    let choicesTemp = Map();
    let i;
    for (i = 0; i < this.props.choicesList.length; i += 1) {
      choicesTemp = choicesTemp.set(i, this.props.choicesList[i]);
    }

    // set current choices to what it was before
    this.setState(prevState => ({
      choices: choicesTemp,
    }));
  }

  deleteBar = (id) => {
    // find want index value the ID is at
    if (this.state.choices.size > 1) {
      this.setState(prevState => ({
        choices: prevState.choices.delete(id),
      }));
    }
  }

  makeNew = (string) => {
    const text = 'add option';
    this.setState(prevState => ({
      id: prevState.id + 1,
      choices: prevState.choices.set(prevState.id, text),
    }));
    this.updateChoices(this.state.id, text);
  }

  // function that updates the JSON choices string
  updateChoices = (id, string) => {
    this.setState(prevState => ({
      choices: prevState.choices.set(id, string),
    }));
    // create an array of choices, to send up
    const options = [];

    let i;
    for (i = 0; i <= this.state.id; i += 1) {
      const val = this.state.choices.get(i);
      if (val !== undefined) {
        options[i] = this.state.choices.get(i);
      }
    }
    this.props.updateOptions(this.props.questionID, options);
  }

  render() {
    // console.log(`Map:${this.state.choices}`);

    const options = this.state.choices.entrySeq().map(([key, value]) => {
      return (
        <Bar id={key}
          initialText={value}
          makeNew={this.makeNew}
          deleteBar={this.deleteBar}
          updateChoices={this.updateChoices}
          key={key}
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
