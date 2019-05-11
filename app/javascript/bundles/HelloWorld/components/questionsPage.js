import React from 'react';
import { Map } from 'immutable';
import * as Survey from 'survey-react';
import Question from './question';
import 'survey-react/survey.css';

export default class QuestionsPage extends React.Component {
  constructor(props) {
    super(props);
    // create a question object
    const newQuestion = {
      type: 'checkbox',
      name: 'id',
      title: 'questionTitle',
      isRequired: true,
      colCount: 4,
      choices: ['choice1', 'choice2'],
    };
    // set State
    this.state = {
      questionID: 2,
      inPreview: false,
      surveyjs: null,
      questionMap: Map(),
      questionType: newQuestion,
    };
  }

  // initial set up of state variables
  componentWillMount() {
    // add first item
    this.setState(prevState => ({
      questionMap: prevState.questionMap.set(1, prevState.questionType),
    }));

    // create Survey Title
    const surveyData = {
      title: 'Survey Default Title',
      pages: [
        {
          name: 'page1',
          questions: [],
        },
      ],
    };
    this.setState({ surveyjs: surveyData });
  }

  onComplete = (survey, options) => {
  // Write survey results into database
    console.log(`Survey results: ${JSON.stringify(survey.data)}`);
  }

  startPreview = () => {
    // surveyData blank slate
    const surveyData = {
      title: 'Default Title',
      pages: [
        {
          name: 'page1',
          questions: [],
        },
      ],
    };
    // put questionMap objects into surveyData
    let i,
      newQuestion;
    for (i = 1; i < this.state.questionID; i += 1) {
      // LEARNING: 'NULL' is 'undefined' in React
      newQuestion = this.state.questionMap.get(i);
      if (newQuestion !== undefined) {
        surveyData.pages[0].questions.push(newQuestion);
      }
    }
    // update surveyjs
    this.setState({ surveyjs: surveyData });

    this.setState({
      inPreview: true,
    });
  }

  endPreview = () => {
    this.setState({
      inPreview: false,
    });
  }

  deleteQuestion = (questionID) => {
    /* delete item from map */
    if (this.state.questionMap.size > 1) {
      this.setState(prevState => ({
        questionMap: prevState.questionMap.delete(questionID),
      }));
    }
  }

  addQuestion = () => {
    // lEARNING - doesn't actually change state until complete RENDER (all the functions complete in that render round). So:
    // 1. console print statements shouldn't be INSIDE function but outside.
    // 2. if were to split into 2 setState functions, prevstate.ID is still the old ID!

    // add new object to the Map & increment the id
    this.setState(prevState => ({
      questionMap: prevState.questionMap.set(prevState.questionID, prevState.questionType),
      questionID: prevState.questionID + 1,
    }));
  }

  updateQuestionType = (questionID, type) => {
    // add new object to the Map & increment the id
    this.setState(prevState => ({
      questionMap: prevState.questionMap.setIn([questionID, 'type'], type),
    }));
  }

  updateQuestionTitle = (questionID, title) => {
    // add new object to the Map & increment the id
    this.setState(prevState => ({
      questionMap: prevState.questionMap.setIn([questionID, 'title'], title),
    }));
  }

  updateOptions = (questionID, options) => {
    // add new object to the Map & increment the id
    this.setState(prevState => ({
      questionMap: prevState.questionMap.setIn([questionID, 'choices'], options),
    }));
  }

  render() {
    const questions = this.state.questionMap.entrySeq().map(([key, questionObject]) => {
      return (
        <Question questionID={key}
          title={this.state.questionMap.get(key).title}
          type={this.state.questionMap.get(key).type}
          deleteQuestion={this.deleteQuestion}
          updateQuestionType={this.updateQuestionType}
          updateQuestionTitle={this.updateQuestionTitle}
          updateOptions={this.updateOptions}
          key={key}
        />
      );
    });

    if (this.state.inPreview) {
      return (
        <div>
          <script src="https://surveyjs.azureedge.net/1.0.79/survey.react.min.js" />
          <link href="https://surveyjs.azureedge.net/1.0.79/survey.css" type="text/css" rel="stylesheet" />
          <button type="button" onClick={this.endPreview}> End Preview </button>
          <Survey.Survey json={this.state.surveyjs} onComplete={this.onComplete} />
        </div>
      );
    } else {
      return (
        <div>
          {questions}
          <button type="button" onClick={this.addQuestion}> Add Question </button>
          <button type="button" onClick={this.startPreview}> Start Preview </button>
        </div>
      );
    }
  }
}
// {console.log(`map state: ${this.state.questionMap}`)}

// {console.log(`${this.state.questionMap.get(1).choices}`)}

// {this.state.questionMap.forEach(this.generateQuestion)}

// {this.state.questions.map(x => (<Question ={x} addQuestion={this.addQuestion} deleteQuestion={this.deleteQuestion} key={x} />))}

// <button type="button" onClick={this.handleClick}>delete</button>
