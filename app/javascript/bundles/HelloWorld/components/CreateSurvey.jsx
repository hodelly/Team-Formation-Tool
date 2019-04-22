// import PropTypes from 'prop-types';
import React from 'react';
import * as Survey from 'survey-react';
import 'survey-react/survey.css';
import { Map } from 'immutable';
import InputSurveyTitle from './InputSurveyTitle';
import AddQuestionToSurvey from './AddQuestionToSurvey';
import Question from './Question';


export default class CreateSurvey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      surveyValue: '', surveyjs: null, inPreview: false, titleStep: true, justAddedQStep: false, questionMap: new Map(), id: 0,
    };
    this.handleSurveyChange = this.handleSurveyChange.bind(this);
    this.handleSurveyTitleChange = this.handleSurveyTitleChange.bind(this);
    this.handlePreview = this.handlePreview.bind(this);
    this.handleNewQuestion = this.handleNewQuestion.bind(this);
    this.handleAddNewQuestion = this.handleAddNewQuestion.bind(this);
    this.deleteQuestion = this.deleteQuestion.bind(this);
    this.updateQuestion = this.updateQuestion.bind(this);
  }

  onComplete = (survey, options) => {
    // Write survey results into database
    console.log(`Survey results: ${JSON.stringify(survey.data)}`);
  }

  handleSurveyChange(event) {
    this.setState({ surveyValue: event.target.value });
  }

  deleteQuestion(id) {
    this.setState(prevState => ({
      questionMap: prevState.questionMap.delete(id),
    }));
  }

  updateQuestion(id, fields) {
    this.setState(prevState => ({
      questionMap: prevState.questionMap.update(id, (q) => { return Object.assign({}, q, fields); }),
    }));
  }

  handleSurveyTitleChange(title) {
    this.setState({ surveyValue: title });
    this.setState({ titleStep: false });
    const surveyData = {
      title,
      pages: [
        { name: 'page1', questions: [] },
      ],
    };
    this.setState({ surveyjs: surveyData });
  }

  handlePreview(event) {
    // this.setState({ inPreview: !this.state.inPreview });
    this.setState(prevState => ({ inPreview: !prevState.inPreview }));
  }

  handleAddNewQuestion(event) {
    // this.setState({ justAddedQStep: !this.state.justAddedQStep });
    this.setState(prevState => ({ justAddedQStep: !prevState.justAddedQStep }));
  }


  handleNewQuestion(newQuestion) {
    // const surveyData = this.state.surveyjs;
    // surveyData.pages[0].questions.push(newQuestion);
    this.setState(prevState => ({
      questionMap: prevState.questionMap.set(prevState.id, Object.assign({}, prevState.questionMap, newQuestion)),
    }));
    this.setState(prevState => ({ id: prevState.id + 1 }));
    this.setState(prevState => ({ surveyjs: prevState.surveyjs.pages[0].questions.push(newQuestion), justAddedQStep: !prevState.justAddedQStep }));

  //  this.setState({ surveyjs: surveyData, justAddedQStep: !this.state.justAddedQStep, id: newid });
  }


  render() {
    console.log(this.state);
    if (this.state.inPreview) {
      return (
        <div>
          <h1> Survey preview bellow </h1>
          <script src="https://surveyjs.azureedge.net/1.0.79/survey.react.min.js" />
          <link href="https://surveyjs.azureedge.net/1.0.79/survey.css" type="text/css" rel="stylesheet" />
          <Survey.Survey json={this.state.surveyjs} onComplete={this.onComplete} />
        </div>
      );
    } else {
      const savedQuestions = this.state.questionMap.entrySeq().map(([id, question]) => {
        return (
          <Question
            title={question.title}
            choices={question.choices}
            isRequired={question.isRequired}
            type={question.type}
            weight={question.weight}
            id={id}
            deleteQuestion={this.deleteQuestion}
            updateQuestion={this.updateQuestion}
          />
        );
      });

      let addButton = null;
      if (this.state.justAddedQStep) {
        addButton = <AddQuestionToSurvey handleNewQuestion={this.handleNewQuestion} />;
      } else if (!this.state.titleStep) {
        addButton = (
          <div>
            <button type="button" onClick={this.handleAddNewQuestion}>
         Add A Question
            </button>
            <button type="button" onClick={this.handlePreview}>
               Preview Survey
            </button>
          </div>
        );
      }


      return (
        <div>
          <h3>Creating a Student Survey</h3>
          <InputSurveyTitle handleSurveyTitleChange={this.handleSurveyTitleChange} />
          {savedQuestions}
          {addButton}
        </div>
      );
    }
  }
}
