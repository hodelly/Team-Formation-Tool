import React from 'react';
import { Link } from 'react-router-dom';
// import { fetchSurveys } from '../actions';
import axios from 'axios';
import DonutChart from 'react-svg-donut-chart';


export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      surveys: '',
    };
  }

  componentDidMount(props) {
    // fetchSurveys();
    console.log(this.props);
    axios.get('http://localhost:3000/api/v1/surveys').then((response) => {
      console.log(response.data);
      this.setState({ surveys: response.data });
    }).catch((error) => {
      console.log(error);
    });
  }

  renderSurvey = () => {
    if (!this.state.surveys.length) {
      return (
        <div className="survey_box">
          <h1>You do not have any ongoing surveys!</h1>
          <h1>Click “Create Survey” to make your first survey for this class.</h1>
        </div>

      );
    } else {
      const done = (5 / this.props.canvas.canvas_enrollments.length) * 100;
      const notDone = 100 - done;
      return (
        <div className="ongoingsurvey_box">
          <div className="dashboard_chart">
            <DonutChart data={[{ stroke: '#245336', value: done }, { value: notDone, stroke: '#c4c4c4' }]} />
            <h1>{this.state.surveys[0].title}</h1>
          </div>
          <div className="dashboard_survey">
            <p>5/{this.props.canvas.canvas_enrollments.length} Students have completed this survey.</p>
            <div id="dashboard_buttons">
              <Link to={`/surveyresults/${this.state.surveys[0].id}`}><button className="regularGreen" type="button"> View Results </button></Link>
              <button className="regularGreen" type="button"> Send Reminder </button>
            </div>
          </div>
        </div>
      );
    }
  }

  renderIncompleteSurvey = () => {
    if (true) {
      return (
        <div />
      );
    } else {
      return (
        <div>
          <h1>Unfinished Surveys:</h1>
          <div className="survey_box">
            <div className="surveyRow">
              <p>Survey Title</p>
              <p>Month, Day, Year</p>
            </div>
          </div>
        </div>
      );
    }
  }

  renderPastSurvey = () => {
    if (false) {
      return (
        <div className="survey_box">
          <h1>Once you use a survey to make groups, it will appear here under past surveys.</h1>

        </div>
      );
    } else {
      return (
        <div className="survey_box">
          <div className="surveyRow">
            <p>Survey Title</p>
            <p>Month, Day, Year</p>
          </div>
          <div className="surveyRow">
            <p>Survey Title</p>
            <p>Month, Day, Year</p>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div id="create_survey">
          <Link to="/surveycreate"><button className="regularGreen" type="button"> Create Survey </button></Link>
        </div>
        <h1>Ongoing Surveys:</h1>
        {this.renderSurvey()}
        {this.renderIncompleteSurvey()}
        <h1>Past Surveys:</h1>
        {this.renderPastSurvey()}
      </div>
    );
  }
}
