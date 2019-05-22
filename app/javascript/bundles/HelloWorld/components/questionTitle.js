import React from 'react';


export default class QuestionHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onInputChange = (event) => {
    this.props.updateQuestionTitle(this.props.questionID, event.target.value);
  }


  handleFocus = event => event.target.select();

  render() {
    return (
      <div>
        <input type="title" value={this.props.title} onChange={this.onInputChange} onFocus={this.handleFocus} questionID={this.props.questionID} />
      </div>
    );
  }
}
