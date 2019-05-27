import React from 'react';
// icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
// components
import { FaHeart } from 'react-icons/fa';
import Options from './options';
import Importance from './importance';
import Distribution from './distribution';
import QuestionHeader from './question_header';

library.add(faTrash);

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  deleteQuestion = () => {
    this.props.deleteQuestion(this.props.questionID);
  }

  onSelectChange = (event) => {
    this.props.updateQuestionType(this.props.questionID, event.target.value);
  }

  render() {
    let options;
    if (this.props.type === 'radiogroup' || this.props.type === 'checkbox' || this.props.type === 'dropdown') {
      options = (
        <Options
          key={this.props.questionID}
          questionID={this.props.questionID}
          inputBarID={this.props.inputBarID}
          choices={this.props.choices}

          updateChoices={this.props.updateChoices}
          addChoice={this.props.addChoice}
          deleteChoice={this.props.deleteChoice}
          updateInputBarCount={this.props.updateInputBarCount}
        />
      );
    } else {
      options = '';
    }

    return (
      <div className="question">
        <div className="questionHeader">
          <QuestionHeader title={this.props.title} questionID={this.props.questionID} updateQuestionTitle={this.props.updateQuestionTitle} />
          <select className="select-css" name="questionType" onChange={this.onSelectChange} value={this.props.type}>
            <option value="checkbox">Checkbox</option>
            <option value="radiogroup">Multiple Choice</option>
            <option value="comment">Short Answer</option>
            <option value="dropdown">Lookup</option>
          </select>
        </div>
        {options}
        <Importance importance={this.props.importance} updateImportance={this.props.updateImportance} />
        <Distribution />
        <span className="fontawesomeIcons"> <button type="button" onClick={this.deleteQuestion}> <FontAwesomeIcon style={{ color: '#C4C4C4' }} icon="trash" /> </button> </span>
      </div>
    );
  }
}

// <img src={icons} alt="failed" />
// <img src={icons} alt="failed" width="100" height="50" />


// <span className="fontawesomeIcons"> <button type="button" onClick={this.deleteQuestion}> <FontAwesomeIcon icon="trash" /> </button> </span>;

// lEARNING: can print props
// console.log(this.props);
