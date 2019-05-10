import React from 'react';
import Options from './options';
import Importance from './importance';
import Distribution from './distribution';
import QuestionHeader from './question_header';


export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionID: this.props.questionID,
      questionType: this.props.type,
    };
  }

  deleteQuestion = () => {
    this.props.deleteQuestion(this.state.questionID);
  }

  onSelectChange = (event) => {
    this.setState({
      questionType: event.target.value,
    });
    this.props.updateQuestionType(this.state.questionID, event.target.value);
  }


  render() {
    let options;
    if (this.state.questionType === 'radiogroup' || this.state.questionType === 'checkbox' || this.state.questionType === 'dropdown') {
      options = <Options questionID={this.state.questionID} updateOptions={this.props.updateOptions} />;
    } else {
      options = '';
    }

    return (
      <div className="question">
        <QuestionHeader title={this.props.title} questionID={this.state.questionID} updateQuestionTitle={this.props.updateQuestionTitle} />
        <select name="questionType" onChange={this.onSelectChange} value={this.state.questionType}>
          <option value="checkbox">Checkbox</option>
          <option value="radiogroup">Multiple Choice</option>
          <option value="comment">Short Answer</option>
          <option value="dropdown">Lookup</option>
        </select>
        {options}
        <Importance />
        <Distribution />
        <button type="button" onClick={this.deleteQuestion}> Delete Question </button>
      </div>
    );
  }
}
