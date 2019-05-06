// import PropTypes from 'prop-types';
import React from 'react';
import CreateSurvey from './CreateSurvey';

// The HelloWorld class used to have the starter code before and now it will be the basis of our code
export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    // How to set initial state in ES6 class syntax
    // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
    this.state = { createSurvey: false };
    console.log('in constrcutr');
    console.log(props);
  }

  render() {
    /*
    Right now this is a "create survey component". We can add other things like review groups, finalize groups etc.
    Create survey is really just for adding a new question right now
    */
    const welcome = (
      <div>
        <h3> Hello Professor! Welcome to your Survey Page </h3>
        <button type="button" onClick={() => { this.setState({ createSurvey: true }); }}>
        Add A Survey
        </button>
      </div>
    );
    let display = welcome;
    if (this.state.createSurvey === true) {
      display = (<CreateSurvey />);
    }
    return (
      <div>
        {display}
      </div>
    );
  }
}
