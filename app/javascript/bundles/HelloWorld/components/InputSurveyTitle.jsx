import React from 'react';

export default class InputSurveyTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { surveyValue: '', titleSaved: false };
    this.handleSurveyChange = this.handleSurveyChange.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handleSurveyChange(event) {
    this.setState({ surveyValue: event.target.value });
  }

  handleNext() {
    this.props.handleSurveyTitleChange(this.state.surveyValue);
    this.setState({ titleSaved: true });
  }

  render() {
    const title = this.state.titleSaved ? (
      <h3>
        {' '}
        {this.state.surveyValue}
        {' '}
      </h3>
    )
      : (
        <label htmlFor="title">
Survey Title:
          <input type="text" value={this.state.surveyValue} onChange={this.handleSurveyChange} />
        </label>
      );

    const btn = (this.state.titleSaved)
      ? (
        <button type="button" onClick={() => { this.setState({ titleSaved: false }); }}>
          Edit
        </button>
      )
      : (
        <button type="button" onClick={this.handleNext}>
          Save
        </button>
      );
    return (
      <div>
        {title}
        {btn}
      </div>
    );
  }
}
