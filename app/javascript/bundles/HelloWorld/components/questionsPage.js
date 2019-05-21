import React from 'react';
import { Map } from 'immutable';
import { Link } from 'react-router-dom';
import * as Survey from 'survey-react';
import 'survey-react/survey.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Question from './question';
import {
  classScheduleQuestion, cantWorkWithQuestion, prefWorkingTimeQuestion, workingStylesQuestion, genderQuestion, ethnicityQuestion,
} from '../utils/standardQuestions';

library.add(faChevronLeft);

export default class QuestionsPage extends React.Component {
  constructor(props) {
    super(props);
    // create a question object
    const newQuestion = {
      type: 'checkbox',
      name: '0',
      title: 'questionTitle',
      isRequired: true,
      colCount: 4,
      choices: Map({ 0: 'choice1', 1: 'choice2', 2: 'choice3' }), // LEARNING: map stores the keys as strings when defining it over here. Uses keys to reference into the map!!!
      importance: 5,
      similar: true,
    };
    // set State
    this.state = {
      inPreview: false,
      questionID: 1,
      surveyjs: null,
      questionMap: Map(),
      questionType: newQuestion,
      largestInputID: 3,
    };
  }

  componentWillMount() {
    // upon start, add all the bucket questions to the page
    // ****i know this is terrible practice, but i can't think of a better way to do this :(*****
    console.log(`${this.props.initialQuestionMap}`);
    if (this.props.initialQuestionMap.get('classSchedule')) {
      this.setState(prevState => ({
        questionMap: prevState.questionMap.set(1, classScheduleQuestion),
        id: prevState + 1,
      }));
    }
    if (this.props.initialQuestionMap.get('cantWorkWith')) {
      this.setState(prevState => ({
        questionMap: prevState.questionMap.set(prevState.id, cantWorkWithQuestion),
        id: prevState + 1,
      }));
    }
    if (this.props.initialQuestionMap.get('prefWorkingTime')) {
      this.setState(prevState => ({
        questionMap: prevState.questionMap.set(prevState.id, prefWorkingTimeQuestion),
        id: prevState + 1,
      }));
    }
    if (this.props.initialQuestionMap.get('workingStyles')) {
      this.setState(prevState => ({
        questionMap: prevState.questionMap.set(prevState.id, workingStylesQuestion),
        id: prevState + 1,
      }));
    }
    if (this.props.initialQuestionMap.get('ethnicity')) {
      this.setState(prevState => ({
        questionMap: prevState.questionMap.set(prevState.id, ethnicityQuestion),
        id: prevState + 1,
      }));
    }
    if (this.props.initialQuestionMap.get('gender')) {
      this.setState(prevState => ({
        questionMap: prevState.questionMap.set(prevState.id, genderQuestion),
        id: prevState + 1,
      }));
    }
    // if at this point, nothing has been added, add one default question to the page
    if (this.state.id === 1) {
      this.setState(prevState => ({
        questionMap: prevState.questionMap.set(0, prevState.questionType),
        id: prevState + 1,
      }));
    }

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

  onComplete = (survey) => {
  // Print on results into console on Complete
    // console.log(`Survey Questions: ${JSON.stringify(survey)}`);
    console.log(`Survey Results: ${JSON.stringify(survey.data)}`);
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
    for (let i = 0; i <= this.state.questionID; i += 1) {
      // LEARNING: 'NULL' is 'undefined' in React
      const question = this.state.questionMap.get(i);
      const newQuestion = Object.assign({}, question); // KEY LEARNING! if modifying an object, want to create a copy of it first in react.
      let array = [];
      if (newQuestion !== undefined && newQuestion.choices !== undefined) {
        // create an array for choices
        // LEARNING: whenever you can, try to use an automatic converted to an Array instead of using a forloop, saves a lot of potential bugs
        array = newQuestion.choices.valueSeq().toArray();
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
    // add new object to the Map with a new 'name'
    const oldQuestion = this.state.questionType;
    const newQuestion = Object.assign({}, oldQuestion);
    newQuestion.name = this.state.questionID.toString();

    // set the updated question as the question in state
    this.setState(prevState => ({
      questionMap: prevState.questionMap.set(prevState.questionID, newQuestion),
    }));

    // update the ID
    this.setState(prevState => ({
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

  updateChoices = (questionID, inputBarID, text) => {
    // get the question at that ID
    const oldQuestion = this.state.questionMap.get(questionID);
    const question = Object.assign({}, oldQuestion); // LEARNING: talk to tim about this. But if i don't create a new object, why woult it change objects other than itself?! I don't understand!!!!!

    // update it's choices
    const choicesMap = question.choices;
    const newChoicesMap = choicesMap.set(inputBarID.toString(), text); // LEARNING: must save the map.set into a variable. It doesn't update the map you call it on!! That's point of immutableJS!
    question.choices = newChoicesMap;

    // set the updated question as the question in state
    this.setState(prevState => ({
      questionMap: prevState.questionMap.set(questionID, question),
    }));

    // console.log(`${newChoicesMap}`); // LEARNING: to print map in {}, must print within ``
  }

  addChoice = (questionID, inputBarID) => {
    const oldQuestion = this.state.questionMap.get(questionID);
    const question = Object.assign({}, oldQuestion);

    // increases everytime someone adds
    this.setState(prevState => ({
      largestInputID: prevState.largestInputID + 1,
    }));


    // update it's choices
    const choicesMap = question.choices;
    const newChoicesMap = choicesMap.set(this.state.largestInputID.toString(), 'addChoice');
    question.choices = newChoicesMap;

    // set the updated question as the question in state
    this.setState(prevState => ({
      questionMap: prevState.questionMap.set(questionID, question),
    }));
  }

  deleteChoice = (questionID, inputBarID) => {
    // console.log(`questionID: ${questionID}`);
    // console.log(`inputBarID: ${inputBarID}`);

    const oldQuestion = this.state.questionMap.get(questionID);
    const question = Object.assign({}, oldQuestion);

    // update it's choices, only if more than 1 inputBar
    const choicesMap = question.choices;
    if (choicesMap.size > 1) {
      const newChoicesMap = choicesMap.delete(inputBarID);
      console.log(newChoicesMap);
      question.choices = newChoicesMap;

      // set the updated question as the question in state
      this.setState(prevState => ({
        questionMap: prevState.questionMap.set(questionID, question),
      }));
    }
  }

  updateImportance = (questionID, value) => {
    const oldQuestion = this.state.questionMap.get(questionID);
    const question = Object.assign({}, oldQuestion);

    // update it's slider value
    question.importance = value;

    // set the updated question as the question in state
    this.setState(prevState => ({
      questionMap: prevState.questionMap.set(questionID, question),
    }));
  }

  updateDistribution = (questionID, value) => {
    const oldQuestion = this.state.questionMap.get(questionID);
    const question = Object.assign({}, oldQuestion);

    // update it's slider value
    question.similar = value;

    // set the updated question as the question in state
    this.setState(prevState => ({
      questionMap: prevState.questionMap.set(questionID, question),
    }));
  }

  render() {
    // console.log(this.state.questionMap);
    const questions = this.state.questionMap.entrySeq().map(([key, questionObject]) => {
      // console.log(`${questionObject.choices}`);
      return (
        <Question
          key={key}
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
          deleteChoice={this.deleteChoice}

          importance={questionObject.importance}
          updateImportance={this.updateImportance}

          similar={questionObject.similar}
          updateDistribution={this.updateDistribution}
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
          <Link to="/dashboard">
            <button className="goToDashboard" type="button"> <FontAwesomeIcon icon="chevron-left" /> Survey Dashboard </button>
          </Link>
          <button className="invertedGreen" type="button" onClick={this.startPreview}> Preview </button>
          <Link to="/groupsize"><button className="regularGreen" type="button"> Publish Survey </button></Link>
          {questions}
          <button type="button" onClick={this.addQuestion}> Add Question </button>
        </div>
      );
    }
  }
}

// {this.state.questionMap.forEach(this.generateQuestion)}

// {this.state.questions.map(x => (<Question ={x} addQuestion={this.addQuestion} deleteQuestion={this.deleteQuestion} key={x} />))}
