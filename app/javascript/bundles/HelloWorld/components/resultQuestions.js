import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';


export default class resultQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(props) {

  }

  renderQuestions = () => {
    return this.props.questions.map((question, id) => {
      return (
        <div className="result_question">
          <div className="result_q_title">
            <h1 className="qNum">Q{id + 1}:&nbsp;</h1><h1> {question.question.question_title}</h1>
          </div>
          <p>Distribution:</p>
          <p>Priority Level:</p>
        </div>
      );
    });
  }


  render() {
    console.log(this.props.questions);
    return (
      <div id="results_questions">
        {this.renderQuestions()}
      </div>
    );
  }
}
