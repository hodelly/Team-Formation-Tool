import React from 'react';
import { Link } from 'react-router-dom';
// import { fetchSurveys } from '../actions';
import axios from 'axios';
import DonutChart from 'react-svg-donut-chart';
// import Moment from 'react-moment';
import moment from 'moment';


export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      past: [],
      unfinished: [],
      current: [],
    };
  }

  componentDidMount(props) {
    axios.get('http://localhost:3000/api/v1/surveys').then((response) => {
      // console.log(response.data);
      for (const [id, survey] of response.data.entries()) {
        const dueDate = moment(survey.due_date);
        const today = moment(new Date());
        if (!survey.is_published) {
          this.setState(prevState => ({
            unfinished: [...prevState.unfinished, survey],
          }));
        } else if (dueDate.isBefore(today)) {
          this.setState(prevState => ({
            past: [...prevState.past, survey],
          }));
        } else {
          this.setState(prevState => ({
            current: [...prevState.current, survey],
          }));
        }
      }
    }).catch((error) => {
      // console.log(error);
    });
  }

  renderSurvey = () => {
    if (!this.state.current.length) {
      return (
        <div className="dashboard_nosurvey">
          <h1>You do not have any ongoing surveys!</h1>
          <h1>Click “Create Survey” to make a survey for this class.</h1>
        </div>
      );
    } else {
      return this.state.current.map((survey, id) => {
        const done = (survey.num_responses / this.props.canvas.canvas_enrollments.length) * 100;
        const notDone = 100 - done;
        return (
          <div className="ongoingsurvey_box">
            <div className="dashboard_chart">
              <DonutChart data={[{ stroke: '#245336', value: done }, { value: notDone, stroke: '#c4c4c4' }]} />
              <h1>{survey.title}</h1>
            </div>
            <div className="dashboard_survey">
              <p>5/{this.props.canvas.canvas_enrollments.length} Students have completed this survey.</p>
              <div id="dashboard_buttons">
                <Link to={`/surveyresults/${survey.id}`}><button className="regularGreen" type="button"> View Results </button></Link>
                <button className="regularGreen" type="button"> Send Reminder </button>
              </div>
            </div>
          </div>
        );
      });
    }
  }

  renderMapIncomplete() {
    return this.state.unfinished.map((survey, id) => {
      return (
        <Link to={`/surveyresults/${survey.id}`}>
          <div className="surveyRow">
            <p>{survey.title}</p>
            <p className="dashboard_survey_date">Started on {moment(survey.created_at).format('MMMM Do, YYYY')}</p>
          </div>
        </Link>
      );
    });
  }

  renderIncompleteSurvey = () => {
    if (!this.state.unfinished.length) {
      return (
        <div />
      );
    } else {
      return (
        <div>
          <h1 className="dashboard_header">Unfinished Surveys:</h1>
          <div className="survey_box">
            {this.renderMapIncomplete()}
          </div>
        </div>
      );
    }
  }

  renderPastSurvey = () => {
    if (!this.state.past.length) {
      return (
        <div className="dashboard_nosurvey">
          <h1>Once you use a survey to make groups, it will appear here under past surveys.</h1>
        </div>
      );
    } else {
      return this.state.past.map((survey, id) => {
        return (
          <Link to={`/surveyresults/${survey.id}`}>
            <div className="surveyRow">
              <p>{survey.title}</p>
              <p className="dashboard_survey_date">Closed on {moment(survey.due_date).format('MMMM Do, YYYY')}</p>
            </div>
          </Link>
        );
      });
    }
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <div id="create_survey">
          <Link to="/surveycreate"><button className="regularGreen" type="button"> Create Survey </button></Link>
        </div>
        <h1 className="dashboard_header">Ongoing Surveys:</h1>
        <div className="survey_box">
          {this.renderSurvey()}
        </div>
        {this.renderIncompleteSurvey()}
        <h1 className="dashboard_header">Past Surveys:</h1>
        <div className="survey_box">
          {this.renderPastSurvey()}
        </div>
      </div>
    );
  }
}
