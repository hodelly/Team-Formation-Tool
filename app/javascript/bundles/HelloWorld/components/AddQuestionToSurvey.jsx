import React from 'react';

export default class AddQuestionToSurvey extends React.Component {

  constructor(props) {
    super(props);
    this.state= {titleValue:"", questionType:"checkbox", answersValues:"", questionWeight: 0}
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleValuesChange = this.handleValuesChange.bind(this);
    this.handleQuestionTypeChange = this.handleQuestionTypeChange.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);

  }

  handleTitleChange(event) {
    this.setState({titleValue: event.target.value});
  }

  handleSliderChange(event) {
    this.setState({questionWeight: event.target.value});
  }

  handleValuesChange(event) {
    this.setState({answersValues: event.target.value});
  }

  handleNext(){
    var newQAdded = (this.state.questionType === "comment" || this.state.questionType=="schedule") ?
    { type: this.state.questionType, isRequired: true, title: this.state.titleValue, weight: 0} :
    { type: this.state.questionType, choices: this.state.answersValues.split(","), isRequired: true, title: this.state.titleValue, weight: this.state.questionWeight } ;
    this.props.handleNewQuestion(newQAdded);
  }

  handleQuestionTypeChange(event) {
    this.setState({questionType: event.target.value});
  }

  render() {
    var options= (this.state.questionType === "comment" || this.state.questionType=="schedule") ? null : <label>Options: <input type="text" value={this.state.answersValues} onChange={this.handleValuesChange} /></label>
    return (
      <div>
        <label>Question Title: <input type="text" value={this.state.titleValue} onChange={this.handleTitleChange} /></label>
        <label>
            Pick your question type:
            <select value={this.state.questionType} onChange={this.handleQuestionTypeChange}>
              <option value="checkbox">CheckBox</option>
              <option value="radiogroup">Radio</option>
              <option value="comment">Free Response</option>
              <option value="schedule">Scheduling</option>
            </select>
        </label>
        {options}
        <label>Question Weight: <input type="range" min="-10" max="10" value={this.state.questionWeight} onChange={this.handleSliderChange} /></label>



        <button  type='button' onClick={this.handleNext}>
          Next
        </button>
      </div>
    );
  }
}
