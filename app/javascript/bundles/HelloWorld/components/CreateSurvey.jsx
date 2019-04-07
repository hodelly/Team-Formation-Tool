import PropTypes from 'prop-types';
import React from 'react';
import MultipleChoiceQs from './MultipleChoiceQs'

export default class CreateSurvey extends React.Component {
  constructor(props) {
    super(props);
    /*
      titleValue: When the user creates a new question, this is the title of the questionn
      answerValues: These are the potential answers that the question can have. Also in the text bars
      questionAnswerMap: Map<Question, QuestionAnswers>
      Size: size of the map right now
    */
    this.state={titleValue:"", answersValues: "", questionAnswerMap: new Map(), size:0};
    this.handleTitleChange = this.handleTitleChange.bind(this); //method to handle changes when typing in input bar for question
    this.handleValuesChange = this.handleValuesChange.bind(this); //method to handle changes when typing in input for ansnwers
    this.handleSubmit = this.handleSubmit.bind(this); //method for when the submit button is clicked
  }

  // when the title is changed we update the titleValue state
  handleTitleChange(event) {
    this.setState({titleValue: event.target.value});
  }

  // when the answer value inputs are changed then update the value state variable
  handleValuesChange(event) {
    this.setState({answersValues: event.target.value});
  }

  // when the submit button is clicked we add the question and the answers (split into an array) to the map
  // also update the size value for null check later
  handleSubmit() {
    this.state.questionAnswerMap[this.state.titleValue] = this.state.answersValues.split(",");
    this.setState({size: this.state.size+1})
  }

  render() {
    //going to be the variable that contains all the multiple choice questions  created
    let questions = null;
    if(this.state.size > 0){ //checks to make sure we have thigns in the map
      // turning all the keys into a list and looping through them
       questions = Object.keys(this.state.questionAnswerMap).map(question => {
         //for each key (questio) we are making a multuple choice question and sending it the answers indexed from
         // the map as well
        return  <MultipleChoiceQs questions={question} answers={this.state.questionAnswerMap[question]}/>
      })
    }

   //individual question HTML that is returned  
    return (
      <div>
        <h3>Creating a Student Survey</h3>
        <h1>Multiple Choice Questions </h1>
        <form onSubmit={this.handleSubmit}>
          <label>Question Title: <input type="text" value={this.state.titleValue} onChange={this.handleTitleChange} /></label>
          <label>Options: <input type="text" value={this.state.answersValues} onChange={this.handleValuesChange} /></label>
        </form>
        <button  type='button' onClick={this.handleSubmit}>
          Submit
        </button>
        {questions}
      </div>
    );
  }
}
