import React from 'react';
// import axios from 'axios';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import HelloWorld from './HelloWorld';
import Dashboard from './dashboard';


export default class AppContainer extends React.Component {
  // static propTypes = {
  //   name: PropTypes.string.isRequired, // this is passed from the Rails view
  // };

  /**
   * @param props - Comes from your rails view.
   */

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    console.log('here');
    return (
      <Router>
        <div id="app">
          <Switch>
            <Route path="/login" component={HelloWorld} />
            <Route path="/dashboard" component={Dashboard} />


            <Route exact path="/" component={HelloWorld} />

            <Route render={() => (<div>page not found</div>)} />
          </Switch>
        </div>
      </Router>
    );
  }
}
