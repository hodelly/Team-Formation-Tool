import React from 'react';
import { Map } from 'immutable';
import axios from 'axios';
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
        classSchedule: false, cantWorkWith: false, prefWorkingTime: false, workingStyle: false, ethnicity: true, gender: true, athletics: false, greekLife: false,
      }),
      preSelection: true,
      surveyTitle: '',
      surveyDescription: '',
      surveyDueDate: '1559096453175',
      questionMapAsApiObject: [],
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

  saveSurvey = (questionMap) => {
    /* stores all the individual question information */
    const allQuestions = [];
    let j = 0;
    questionMap.entrySeq().forEach((e) => { // for every question in the map
      const key = e[0];
      const question = e[1]; // create an api question object
      // question type
      let question_type = 'unknown';
      if (question.type === 'checkbox') question_type = 'CHECKBOX';
      else if (question.type === 'radiogroup' || question.type === 'dropdown') question_type = 'MULTIPLE_CHOICE';
      else if (question.type === 'comment') question_type = 'SHORT_ANSWER';

      let weight = question.importance; // weight: a combination of similarity & importance
      if (question.similar === false) {
        weight *= -1;
      }
      const response_values = question.choices.toIndexedSeq().toArray(); // reponses
      const is_default = false; // TO DO: make all the bucket one's true, non-bucket one's false
      const question_title = question.title; // question title

      // create object
      const newQuestion = {
        question_type,
        weight,
        response_values,
        is_default,
        question_title,
      };
      allQuestions[j] = newQuestion;
      j += 1;
    });

    // // checking question object
    console.log('questions are: \n');
    let i = 0;
    for (i = 0; i < allQuestions.length; i += 1) {
      console.log(`${allQuestions[i].question_type} `);
      console.log(`${allQuestions[i].weight} `);
      console.log(`${allQuestions[i].response_values} `);
      console.log(`${allQuestions[i].is_default} `);
      console.log(`${allQuestions[i].question_title} `);
    }
    // console.log('LOGGING PROPS:');
    // console.log(this.props);

    const apiObject = {
      course_id: this.props.canvas.canvas_enrollments[0].course_id, // getting course ID off of first student
      title: this.state.surveyTitle,
      sis_instructor_id: '0', // don't have this data yet
      survey_questions: allQuestions,
      due_date: this.state.surveyDueDate,
      description: this.state.surveyDescription,
    };
    console.log(apiObject);

    this.createSurvey(apiObject);
  }

  createSurvey = (survey) => {
    axios.post('http://localhost:3000/api/v1/surveys', survey).then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }

  updateSurveyTitle = (value) => {
    this.setState(prevState => ({
      surveyTitle: value,
    }));
  }

  updateSurveyDescription = (value) => {
    this.setState(prevState => ({
      surveyDescription: value,
    }));
  }

  updateSurveyDueDate = (value) => {
    this.setState(prevState => ({
      surveyDueDate: value,
    }));
  }

  render() {
    // if continue button not clicked display buckets
    // console.log(this.props.canvas);
    if (this.state.preSelection) {
      return (
        <PreSelection initialQuestionMap={this.state.initialQuestionMap} handleContinue={this.handleContinue} handleClick={this.handleClick} />
      );
    }
    // once continue button clicked, display the Questions Page
    return (
      <div>
        <QuestionsPage
          initialQuestionMap={this.state.initialQuestionMap}
          saveSurvey={this.saveSurvey}

          surveyTitle={this.state.surveyTitle}
          surveyDescription={this.state.surveyDescription}
          surveyDueDate={this.state.surveyDueDate}

          updateSurveyTitle={this.updateSurveyTitle}
          updateSurveyDescription={this.updateSurveyDescription}
          updateSurveyDueDate={this.updateSurveyDueDate}
        />
      </div>
    );
  }
}

// lEARNING: loop through an immuntable JS map with a forEach loop
