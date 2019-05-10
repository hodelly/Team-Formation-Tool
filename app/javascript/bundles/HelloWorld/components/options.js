import React from 'react';
// import { List } from 'immutable';
import { Map } from 'immutable';
import Bar from './bar';


export default class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      choices: Map(),
    };
  }

  componentWillMount() {
    // add first item
    // let i;
    // for (i = 0, i < this.state.choices.size, i += 1) {
    //
    // }
    // this.state.choices.entrySeq().map(([key, value]) {
    //   this.setState(prevState => ({
    //     choices: prevState.initialOptions.set(0, 'option1'),
    //   }));
    // });

    // PROBLEM - MOUNTING NEW MAP EVERYTIME. BUT MUST MOUNT ATLEAST 1 ITEM!
    // HOW TO FIX?

    this.setState(prevState => ({
      choices: prevState.choices.set(0, 'option1'),
    }));
    this.setState(prevState => ({
      choices: prevState.choices.set(1, 'option2'),
    }));
    this.setState(prevState => ({
      choices: prevState.choices.set(2, 'add options'),
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
    this.setState(prevState => ({
      id: prevState.id + 1,
      choices: prevState.choices.set(prevState.id, 'add option'),
    }));
  }

  updateChoices = (id, string) => {
    this.setState(prevState => ({
      choices: prevState.choices.set(id, string),
    }));
    // create an array of choices
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
    console.log(`${this.state.choices}`);

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
// {console.log(`${this.state.choices}`)}


// <button type="button" onClick={this.handleDelete}> delete </button>


// bars: List.ofBar(Bar),
