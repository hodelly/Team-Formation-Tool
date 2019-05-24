import React from 'react';
// icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
// components
import { Map } from 'immutable';
import QuestionsPage from './questionsPage';


library.add(faTrash);

export default class PreSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showQuestions: true,
      showResults: false,
    };
  }


  render() {
    // allow user to edit & create questions
    if (this.state.showQuestions) {
      return (
        <div>
          <button type="button" onClick={this.goToQuestions}> Questions </button>
          <button type="button" onClick={this.goToResultss}> Results </button>
          <QuestionsPage initialQuestionMap={this.state.initialQuestionMap} goToDashboard={this.props.goToDashboard} />
        </div>
      );
    }
    else if (this.state.showResults) {
    return (
      <div>
        <button type="button" onClick={this.goToQuestions}> Questions </button>
        <button type="button" onClick={this.goToResultss}> Results </button>
        <ResultsPage initialQuestionMap={this.state.initialQuestionMap} goToDashboard={this.props.goToDashboard} />
      </div>
    );
  }
}

// <button type="button" onClick={}> Athletics </button>
// <button type="button" onClick={}> Greek Affiliation </button>


// lEARNING: can print props
// console.log(this.props);
