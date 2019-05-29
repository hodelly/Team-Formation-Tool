import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import { Map } from 'immutable';
import ResultQuestions from './resultQuestions';
import ResultTable from './resultTable';

library.add(faChevronLeft);


export default class surveyResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      survey: '',
      renderResults: true,
    };
  }

  componentDidMount(props) {
    axios.get(`http://localhost:3000/api/v1/surveys/${this.props.match.params.id}`).then((response) => {
      this.setState({ survey: response.data });
    }).catch((error) => {
      console.log(error);
    });
  }

  showQuestions = () => {
    this.setState({ renderResults: false });
  }

  showResults = () => {
    this.setState({ renderResults: true });
  }

  renderBottom() {
    console.log(this.state.survey.survey_responses);
    if (this.state.renderResults) {
      return (
        <ResultTable canvas={this.props.canvas} showQs={this.showQuestions} responses={this.state.survey.survey_responses} questions={this.state.survey.survey_questions} />
      );
    } else {
      return (
        <ResultQuestions questions={this.state.survey.survey_questions} />
      );
    }
  }

  render() {
    console.log(this.state.survey);
    return (
      <div id="survey_results">
        <div id="results_header">
          <Link to="/dashboard">
            <button className="goToDashboard" type="button"> <FontAwesomeIcon icon="chevron-left" />Survey Dashboard/Survey Responses</button>
          </Link>
          <button className="regularGreen" type="button">Publish Groups</button>
        </div>
        <div id="results_toggle">
          <div className="toggle_buttons">
            <button id="toggle_button_question" className={(this.state.renderResults) ? 'not_active' : 'active'} type="button" onClick={this.showQuestions}>Questions</button>
            <button id="toggle_button_response" className={(this.state.renderResults) ? 'active' : 'not_active'} type="button" onClick={this.showResults}>Responses ({this.state.survey.num_responses})</button>
          </div>
          <div id="results_info">
            <h1>{this.state.survey.title}</h1>
            <div id="results_description">
              <h2>{this.state.survey.description}</h2>
              <p>Survey due: {moment(this.state.due_date).format('MMMM Do, YYYY')}</p>
            </div>
          </div>
        </div>
        {this.renderBottom()}
      </div>
    );
  }
}
