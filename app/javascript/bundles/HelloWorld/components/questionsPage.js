import React from 'react';
import { Map } from 'immutable';
import { Link } from 'react-router-dom';
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
      name: '0', // is this the reason everything was getting checked at once? Hm..
      title: 'questionTitle',
      isRequired: true,
      colCount: 4,
      choices: Map({ 0: 'choice1', 1: 'choice2', 2: 'choice3' }), // LEARNING: map stores the keys as strings when defining it over here. Uses keys to reference into the map!!!
      importance: 5,
    };
    // set State
    this.state = {
      questionID: 1,
      inPreview: false,
      surveyjs: null,
      questionMap: Map(),
      questionType: newQuestion,
      largestInputID: 3,
    };
  }

  componentWillMount() {
    // upon start, add one question to the page
    this.setState(prevState => ({
      questionMap: prevState.questionMap.set(0, prevState.questionType),
    }));

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
    for (let i = 0; i <= this.state.questionID; i += 1) {
      // LEARNING: 'NULL' is 'undefined' in React
      const question = this.state.questionMap.get(i);
      const newQuestion = Object.assign({}, question);
      let array = [];
      if (newQuestion !== undefined && newQuestion.choices !== undefined) {
        // create an array for choices
        array = newQuestion.choices.valueSeq().toArray();
        // let j;
        // for (j = 0; j <= this.state.largestInputID; j += 1) {
        //   if (newQuestion.choices.get(j.toString(10)) === undefined) {
        //     console.log(`undefined for question ${i} bar ${j}\n`);
        //   } else if (newQuestion.choices.get(j.toString(10)) !== undefined) {
        //     // console.log(`${newQuestion.choices.get(j.toString())}\n`);
        //     array[j] = newQuestion.choices.get(j.toString());
        //   }
        // }
      }
      // console.log(`array: ${array}`);
      // change choices question item to an array
      console.log(`ARRAY: ${array}`);
      newQuestion.choices = array;
      // put the new question into surveyData
      surveyData.pages[0].questions.push(newQuestion);
    }
    // update surveyjs
    console.log(surveyData);
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


    // this.setState(prevState => ({
    //   questionMap: prevState.questionMap.set(prevState.questionID, prevState.questionType),
    //   questionID: prevState.questionID + 1,
    // }));
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
          <button className="goToDashboard" type="button" onClick={this.props.goToDashboard}>
            {' '}
            <FontAwesomeIcon icon="chevron-left" />
Survey Dashboard
            {' '}
          </button>
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
