//import PropTypes from 'prop-types';
import React from 'react';
import * as Survey from "survey-react";
import "survey-react/survey.css";

export default class CreateSurvey extends React.Component {
  constructor(props) {
    super(props);
    /*
      titleValue: When the user creates a new question, this is the title of the questionn
      answerValues: These are the potential answers that the question can have. Also in the text bars
      questionAnswerMap: Map<Question, QuestionAnswers>
      Size: size of the map right now
    */
    this.state={titleValue:"", answersValues: "", surveyValue:"", surveyjs: null, inPreview:false};
    this.handleTitleChange = this.handleTitleChange.bind(this); //method to handle changes when typing in input bar for question
    this.handleValuesChange = this.handleValuesChange.bind(this); //method to handle changes when typing in input for ansnwers
    this.handleSurveyChange = this.handleSurveyChange.bind(this); //method to handle changes when typing in input for ansnwers
    this.handleSubmitCheckBox = this.handleSubmitCheckBox.bind(this); //method for when the submit button is clicked
    this.handleSubmitRadio = this.handleSubmitRadio.bind(this); //method for when the submit button is clicked
    this.handlePreview = this.handlePreview.bind(this); //method for when the submit button is clicked
    this.onComplete = this.onComplete.bind(this); //method to handle changes when typing in input bar for question

  }

  // when the title is changed we update the titleValue state
  handleTitleChange(event) {
    this.setState({titleValue: event.target.value});
  }

  // when the answer value inputs are changed then update the value state variable
  handleSurveyChange(event) {
    this.setState({surveyValue: event.target.value});
  }

  handleValuesChange(event) {
    this.setState({answersValues: event.target.value});
  }

  handlePreview(event) {
    this.setState({inPreview: !this.state.inPreview});
  }



  // when the submit button is clicked we add the question and the answers (split into an array) to the map
  // also update the size value for null check later
  handleSubmitCheckBox() {
    if(this.state.surveyjs!=null){
      var surveyData = this.state.surveyjs;
      var newQAdded = { type: "checkbox", choices: this.state.answersValues.split(","), isRequired: true, title: this.state.titleValue };
      surveyData.pages[0].questions.push(newQAdded);
      this.setState({surveyjs: surveyData});
    }
    else {
      var surveyData = { title: this.state.surveyValue, pages: [
        { name:"page1", questions: [
          { type: "checkbox", choices: this.state.answersValues.split(","), isRequired: true, title: this.state.titleValue },
        ]},
      ]
    };
    this.setState({surveyjs: surveyData})
    }
  }

  handleSubmitRadio() {
    if(this.state.surveyjs!=null){
      var surveyData = this.state.surveyjs;
      var newQAdded = { type: "radiogroup", choices: this.state.answersValues.split(","), isRequired: true, title: this.state.titleValue };
      surveyData.pages[0].questions.push(newQAdded);
      this.setState({surveyjs: surveyData});
    }
    else {
      var surveyData = { title: this.state.surveyValue, pages: [
        { name:"page1", questions: [
          { type: "radiogroup", choices: this.state.answersValues.split(","), isRequired: true, title: this.state.titleValue },
        ]},
      ]
    };
    this.setState({surveyjs: surveyData})
    }
  }


  onComplete(survey, options) {
   //Write survey results into database
   console.log("Survey results: " + JSON.stringify(survey.data));
  }


  render() {

   //individual question HTML that is returned
   if(this.state.inPreview){
     return(
       <div>
        <h1> Survey preview bellow </h1>
         <script src="https://surveyjs.azureedge.net/1.0.79/survey.react.min.js"></script>
         <link href="https://surveyjs.azureedge.net/1.0.79/survey.css" type="text/css" rel="stylesheet" />
         <Survey.Survey json={this.state.surveyjs} onComplete={this.onComplete}/>
      </div>
     );
   }
   else{
    return (
      <div>
        <h3>Creating a Student Survey</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Survey Title: <input type="text" value={this.state.surveyValue} onChange={this.handleSurveyChange} /></label>
          <label>Question Title: <input type="text" value={this.state.titleValue} onChange={this.handleTitleChange} /></label>
          <label>Options: <input type="text" value={this.state.answersValues} onChange={this.handleValuesChange} /></label>
        </form>
        <div>
        <button  type='button' onClick={this.handleSubmitCheckBox}>
          Add CheckBox Q
        </button>
        <button  type='button' onClick={this.handleSubmitRadio}>
          Add Radio Q
        </button>
        </div>
        <button  type='button' onClick={this.handlePreview}>
          Preview Survey
        </button>
        {questions}
      </div>
    );
  }
}
}
