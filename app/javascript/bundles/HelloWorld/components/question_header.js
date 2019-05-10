import React from 'react';


export default class QuestionHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionID: this.props.questionID,
      text: this.props.title,
    };
  }

  onInputChange = (event) => {
    this.setState({ text: event.target.value });
    this.props.updateQuestionTitle(this.state.questionID, event.target.value);
  }


  handleFocus = event => event.target.select();

  render() {
    return (
      <div>
        <input type="title" value={this.state.text} onChange={this.onInputChange} onFocus={this.handleFocus} questionID={this.state.questionID} />
      </div>
    );
  }
}
