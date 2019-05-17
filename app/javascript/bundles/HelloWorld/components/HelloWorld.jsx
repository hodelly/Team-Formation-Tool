// import PropTypes from 'prop-types';
import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import QuestionsPage from './questionsPage';
import Dashboard from './dashboard';
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
      // onQuestionsPage: false,
      // onDashboard: false,
      // onStart: true,
      // onGroupNumber: false,
    };
  }

  render() {
    return(
      <Router>
        <Switch>
          <Route
              exact
              path='/'
              render={(routeProps) => (
                  <Dashboard
                  {...routeProps}
                  />
              )}
          />
          <Route
              path='/dashboard'
              render={(routeProps) => (
                  <Dashboard
                  {...routeProps}
                  />
              )}
          />
          <Route
              path='/surveycreation'
              render={(routeProps) => (
                  <QuestionsPage
                  {...routeProps}
                  />
              )}
          />
          <Route
              path='/groupsize'
              render={(routeProps) => (
                  <GroupNumber
                  {...routeProps}
                  />
              )}
          />
          <Route
              path='/start'
              render={(routeProps) => (
                  <Start
                  {...routeProps}
                  />
              )}
          />
        </Switch>
      </Router>
    );
    return (null);
  }
}
