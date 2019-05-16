import React from 'react';
import { Map } from 'immutable';
import * as Survey from 'survey-react';
import 'survey-react/survey.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Question from './question';

library.add(faChevronLeft);

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
      choices: Map({ 0: 'choice1', 1: 'choice2', 2: 'choice3' }),
    };
    // set State
    this.state = {
      questionID: 2,
      inputBarID: 3,
      inPreview: false,
      surveyjs: null,
      questionMap: Map(),
      questionType: newQuestion,
    };
  }

  componentWillMount() {
    // upon start, add one question to the page
    this.setState(prevState => ({
      questionMap: prevState.questionMap.set(1, prevState.questionType),
    }));

    // upon start, add three questions to the choices
    // const newQuestion = this.state.questionType;
    // const map = newQuestion.choices;
    // map.set(1, 'choice1');
    // map.set(2, 'choice2');
    // map.set(3, 'choice3');
    //
    // this.setState(prevState => ({
    //   questionType: newQuestion,
    // }));

    // give the survey a title
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
    for (let i = 1; i < this.state.questionID; i += 1) {
      // LEARNING: 'NULL' is 'undefined' in React
      const question = this.state.questionMap.get(i);
      const newQuestion = Object.assign({}, question);
      const array = [];
      if (newQuestion !== undefined) {
        // create an array for choices
        let j;
        for (j = 0; j < this.state.inputBarID; j += 1) {
          array[j] = newQuestion.choices.get(j.toString()); // LEARNING: map stores the keys as strings too!!!
        }
      }
      // change choices question item to an array
      newQuestion.choices = array;
      // put the new question into surveyData
      surveyData.pages[0].questions.push(newQuestion);
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

  updateChoices = (questionID, inputbarID) => {
    // get the question at that ID
    const oldQuestion = this.state.questionMap.get(questionID);
    const question = Object.assign({}, oldQuestion); // LEARNING: talk to tim about this. But if i don't create a new object, why woult it change objects other than itself?! I don't understand!!!!!

    // update it's choices
    const choicesMap = question.choices;
    const newChoicesMap = choicesMap.set(inputbarID.toString(), text); // LEARNING: must save the map.set into a variable. It doesn't update the map you call it on!! That's point of immutableJS!
    question.choices = newChoicesMap;

    // set the updated question as the question in state
    this.setState(prevState => ({
      questionMap: prevState.questionMap.set(questionID, question),
    }));

    // console.log(`${newChoicesMap}`); // LEARNING: to print map in {}, must print within ``
  }

  addChoice = (questionID, inputbarID, text) => {
    // increase inputbarID by 1
    this.setState(prevState => ({
      inputbarID: prevState.inputbarID + 1,
    }));

    const oldQuestion = this.state.questionMap.get(questionID);
    const question = Object.assign({}, oldQuestion);

    // update it's choices
    const choicesMap = question.choices;
    const newChoicesMap = choicesMap.add((inputbarID + 1).toString());
    question.choices = newChoicesMap;

    // set the updated question as the question in state
    this.setState(prevState => ({
      questionMap: prevState.questionMap.set(questionID + 1, question),
    }));
  }

  render() {
    console.log(this.state.questionMap);
    const questions = this.state.questionMap.entrySeq().map(([key, questionObject]) => {
      // console.log(`${questionObject.choices}`);
      return (
        <Question
          questionID={key}
          inputBarID={questionObject.inputBarID}
          title={questionObject.title}
          type={questionObject.type}
          choices={questionObject.choices}


          deleteQuestion={this.deleteQuestion}
          updateQuestionType={this.updateQuestionType}
          updateQuestionTitle={this.updateQuestionTitle}

          updateChoices={this.updateChoices}
          addChoice={this.addChoice}
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
          <button className="goToDashboard" type="button" onClick={this.props.goToDashboard}>   <FontAwesomeIcon icon="chevron-left" />Survey Dashboard </button>
          <button className="invertedGreen" type="button" onClick={this.startPreview}> Preview </button>
          <button className="regularGreen" type="button" onClick={this.startPreview}> Publish Survey </button>
          {questions}
          <button type="button" onClick={this.addQuestion}> Add Question </button>
        </div>
      );
    }
  }
}

// {this.state.questionMap.forEach(this.generateQuestion)}

// {this.state.questions.map(x => (<Question ={x} addQuestion={this.addQuestion} deleteQuestion={this.deleteQuestion} key={x} />))}
