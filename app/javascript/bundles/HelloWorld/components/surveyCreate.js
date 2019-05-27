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
    console.log(props);
    console.log('on survey create');
    // initial questions
    this.state = {
      initialQuestionMap: Map({
        classSchedule: false, cantWorkWith: false, prefWorkingTime: false, workingStyle: false, ethnicity: true, gender: true, athletics: false, greekLife: false,
      }),
      preSelection: true,
      surveyTitle: '',
      surveyDescription: '',
      surveyDueDate: '',
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

  getQuestionMapAsApiObject = (questionMap) => {
    console.log('do nothing for now');
    // const allQuestions = []; // stores all the questions
    // // for every question in the map
    // questionMap.entrySeq().forEach((e) => {
    //   const key = e[0];
    //   const question = e[1];
    //   /** create an api question object * */
    //   // question type
    //   const question_type = 'unknown';
    //   if (question.type === 'checkbox') question_type = 'CHECKBOX';
    //   else if (question.type === 'radiogroup') question_type = 'MULTIPLE_CHOICE';
    //   else if (question.type === 'dropdown') question_type = 'DROP_DOWN';
    //   else if (question.type === 'comment') question_type = 'SHORT_ANSWER';
    //
    //   // weight
    //   const weight = question.importance;
    //
    //   // reponses
    //   const response_values = question.choices.toIndexedSeq().toArray();
    //
    //   // is default
    //   // const is_default = false;
    //   // make all the bucket one's true, non-bucket one's false
    //
    //   // question title
    //   const question_title = question.title;
    //
    //
    //   // create object
    //   const newQuestion = {
    //     question_type,
    //     weight,
    //     response_values,
    //     // is_default
    //     question_title,
    //     // is_enabled:
    //   };
    //
    //   allQuestions[key] = newQuestion;
    // });
    //
    // // store this new value in state
    // this.setState(prevState => ({
    //   questionMapAsApiObject: allQuestions,
    // }));
  }

  createAPIobject = () => {
    console.log('do nothing for now');

    // const questionMapAsApiObject = this.state.getQuestionMapAsApiObject();
    //
    // const apiObject = {
    //   course_id: '', // unsure how to get
    //   title: this.state.surveyTitle,
    //   sis_instructor_id: '', // unsure how to get
    //   survey_questions: this.state.questionMapAsApiObject,
    //   due_date: this.state.surveyDueDate,
    //   group_size: '', // taken out?
    //   description: this.state.surveyDescription,
    // };
  }

  createSurvey = (survey) => {
    axios.post('http://localhost:3000/api/v1/surveys', survey).then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }


  render() {
    // if continue button not clicked display buckets
    console.log(this.props.canvas);
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
          surveyTitle={this.state.surveyTitle}
          surveyDescription={this.state.surveyDescription}
          surveyDueDate={this.state.surveyDueDate}
          getQuestionMapAsApiObject={this.getQuestionMapAsApiObject}
        />
      </div>
    );
  }
}

// lEARNING: loop through an immuntable JS map with a forEach loop
