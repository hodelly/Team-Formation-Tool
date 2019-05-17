import React from 'react';
import { Link } from 'react-router-dom';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderSurvey = () => {
    if (true) {
      return (
        <div className="survey_box">
          <h1>You do not have any ongoing surveys!</h1>

          <h1>Click “Create Survey” to make your first survey for this class.</h1>
        </div>

      );
    } else {
      return (
        <div className="survey_box">
          <div className="surveyRow">
            <p>Survey Title</p>
            <p>Month, Day, Year</p>
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
          <Link to="/surveycreation"><button className="regularGreen" type="button"> Create Survey </button></Link>
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
