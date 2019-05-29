import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import moment from 'moment';
// components
import Distribution from './distribution';
import Importance from './importance';

library.add(faCircle);


export default class resultQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(props) {

  }

  renderOptions = (responses) => {
    return responses.map((option, id) => { // LEARNING! mapping through array. double return.
      return (
        <h7 className="optionsFont"> <FontAwesomeIcon icon={['far', 'circle']} /> {option} </h7>
      );
    });
  }

  renderQuestions = () => {
    return this.props.questions.map((question, id) => {
      const importance = Math.abs(question.weight);
      let distribution = true;
      if (question.weight < 0) distribution = false;
      return (
        <div className="question">
          <div className="greyedOut">
            <div className="resultsOptions">
              <span className="italics"> <h7> {id + 1}) {question.question.question_title}</h7> </span>
              {this.renderOptions(question.question.response_values)}
            </div>
          </div>
          <div className="weightingHeader">
            <div className="resultsWeighting">
              <h1> Weighting </h1>
            </div>
          </div>
          <Distribution questionID={id} distribution={distribution} />
          <hr />
          <Importance questionID={id} importance={importance} />
          <hr />
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

// <div className="result_question">
//   <div className="result_q_title">
//     <h1 className="qNum">Q{id + 1}:&nbsp;</h1><h1> {question.question.question_title}</h1>
//   </div>
//   <p>Distribution:</p>
//   <Distribution distribution={this.props.distribution} updateDistribution={this.updateDistribution} />
//   <p>Priority Level:</p>
//
//   <Importance questionID={id} importance={importance} />
//
// </div>
