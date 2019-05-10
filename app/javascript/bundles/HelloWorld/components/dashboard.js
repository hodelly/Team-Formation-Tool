import React from 'react';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const pastSurveys = (
      <div>
        <h> Past Surveys </h>
        <p> past surveys go here </p>
      </div>
    );
    return (
      <div>
        {pastSurveys}
        {pastSurveys}
      </div>
    );
  }
}
