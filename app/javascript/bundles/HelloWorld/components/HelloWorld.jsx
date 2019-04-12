//import PropTypes from 'prop-types';
import React from 'react';
import CreateSurvey from './CreateSurvey';
import * as Survey from "survey-react";
import "survey-react/survey.css";

//The HelloWorld class used to have the starter code before and now it will be the basis of our code
export default class HelloWorld extends React.Component {
  // static propTypes = {
  //   name: PropTypes.string.isRequired, // this is passed from the Rails view
  // };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);
    // How to set initial state in ES6 class syntax
    // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
    this.state = { name: this.props.name };
    this.onComplete = this.onComplete.bind(this); //method to handle changes when typing in input bar for question

  }

  onComplete(survey, options) {
   //Write survey results into database
   console.log("Survey results: " + JSON.stringify(survey.data));
  }

  render() {
    var surveyJSON = { title: "Tell us, what technologies do you use?", pages: [
  { name:"page1", questions: [
      { type: "radiogroup", choices: [ "Yes", "No" ], isRequired: true, name: "frameworkUsing",title: "Do you use any front-end framework like Bootstrap?" },
      { type: "checkbox", choices: ["Bootstrap","Foundation"], hasOther: true, isRequired: true, name: "framework", title: "What front-end framework do you use?", visibleIf: "{frameworkUsing} = 'Yes'" }
   ]},
  { name: "page2", questions: [
    { type: "radiogroup", choices: ["Yes","No"],isRequired: true, name: "mvvmUsing", title: "Do you use any MVVM framework?" },
    { type: "checkbox", choices: [ "AngularJS", "KnockoutJS", "React" ], hasOther: true, isRequired: true, name: "mvvm", title: "What MVVM framework do you use?", visibleIf: "{mvvmUsing} = 'Yes'" } ] },
  { name: "page3",questions: [
    { type: "comment", name: "about", title: "Please tell us about your main requirements for Survey library" } ] }
 ]
};
    //  var model = new Survey.Model(surveyJSON);

    /*
    Right now this is a "create survey component". We can add other things like review groups, finalize groups etc.
    Create survey is really just for adding a new question right now
    */
    return (
      <div>
        <script src="https://surveyjs.azureedge.net/1.0.79/survey.react.min.js"></script>
        <link href="https://surveyjs.azureedge.net/1.0.79/survey.css" type="text/css" rel="stylesheet" />
        <Survey.SurveyWindow json={surveyJSON} onComplete={this.onComplete}/>
        <CreateSurvey />
      </div>
    );
  }
}
