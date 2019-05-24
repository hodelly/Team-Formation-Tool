// import PropTypes from 'prop-types';
import React, {useEffect} from 'react';
import axios from 'axios';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './dashboard';
import SurveyResults from './surveyResults';
import SurveyCreate from './surveyCreate';
import Start from './start';
import GroupNumber from './GroupNumber';

// The HelloWorld class used to have the starter code before and now it will be the basis of our code
export default class HelloWorld extends React.Component {
  // static propTypes = {
  //   name: PropTypes.string.isRequired, // this is passed from the Rails view
  // };

  /**
   * @param props - Comes from your rails view.
   */

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
    };
  }
  // useEffect(() => {
  //   axios.get('/api/v1/surveys').then( (response) => {
  //     console.log(response.data);
  //   }).catch( error => {
  //     console.log(error);
  //   })
  // }, []);

  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={routeProps => (
              <Dashboard
                {...routeProps}
                canvas={this.props}
              />
            )}
          />
          <Route
            path="/dashboard"
            render={routeProps => (
              <Dashboard
                {...routeProps}
                canvas={this.props}
              />
            )}
          />
          <Route
            path="/surveycreate"
            render={routeProps => (
              <SurveyCreate
                {...routeProps}
              />
            )}
          />
          <Route
            path="/surveyresults/:id"
            render={routeProps => (
              <SurveyResults
                {...routeProps}
              />
            )}
          />
          <Route
            path="/groupsize"
            render={routeProps => (
              <GroupNumber
                {...routeProps}
              />
            )}
          />
          <Route
            path="/start"
            render={routeProps => (
              <Start
                {...routeProps}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }
}
