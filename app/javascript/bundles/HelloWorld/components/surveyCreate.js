import React from 'react';
import { Map } from 'immutable';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import PreSelection from './preSelection';
import QuestionsPage from './questionsPage';


library.add(faChevronLeft);

export default class SurveyCreate extends React.Component {
  constructor(props) {
    super(props);
    // initial questions
    this.state = {
      initialQuestionMap: Map({
        classSchedule: false, cantWorkWith: false, prefWorkingTime: false, workingStyles: false, ethnicity: true, gender: true, athletics: false, greekLife: false,
      }),
      preSelection: true,
    };
  }

  handleContinue = (question) => {
    this.setState(prevState => ({
      preSelection: false,
    }));
  }

  handleClick = (questionID) => {
    this.setState(prevState => ({
      initialQuestionMap: prevState.initialQuestionMap.set(questionID, !prevState.initialQuestionMap.get(questionID)),
    }));
  }


  render() {
    // if continue button not clicked display buckets
    if (this.state.preSelection) {
      return (
        <PreSelection initialQuestionMap={this.state.initialQuestionMap} handleContinue={this.handleContinue} handleClick={this.handleClick} />
      );
    }
    // once continue button clicked, display the Questions Page
    return (
      <QuestionsPage initialQuestionMap={this.state.initialQuestionMap} />
    );
  }
}
