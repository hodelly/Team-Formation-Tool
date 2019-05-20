import React from 'react';
// icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
// components
import { Map } from 'immutable';
import QuestionsPage from './questionsPage';


library.add(faTrash);

export default class PreSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialQuestionMap: Map(), // storing information twice here, is it okay for convenience?
      id: 0,
      continue: false,
      classSchedule: false,
      cantWorkWith: false,
      prefWorkingTime: false,
      workingStyles: false,
      ethnicity: false,
      gender: false,
      // QUESTIONS:
      // 1) how to make the selected thing work?
      // 2) how to make the buttons square and not have that weird bounce thing in padding?
      border: '1px solid #DEDEDE',
    };
  }

  classSchedule = (event) => {
    // change whether or not the question will be added to the survey upon each click
    this.setState(prevState => ({
      classSchedule: !prevState.classSchedule,
    }));

    // have a different border color depending on whether or not the button is clicked
    this.changeBorder(this.state.classSchedule);
  }

  cantWorkWith = () => {
    this.setState(prevState => ({
      cantWorkWith: !prevState.cantWorkWith,
    }));
  }

  prefWorkingTime = () => {
    this.setState(prevState => ({
      prefWorkingTime: !prevState.prefWorkingTime,
    }));
  }

  workingStyles = () => {
    this.setState(prevState => ({
      workingStyles: !prevState.workingStyles,
    }));
  }

  ethnicity = () => {
    this.setState(prevState => ({
      ethnicity: !prevState.ethnicity,
    }));
  }

  gender = () => {
    this.setState(prevState => ({
      gender: !prevState.gender,
    }));
  }

  addToSurvey = (addQuestion) => {
    this.setState(prevState => ({
      initialQuestionMap: prevState.initialQuestionMap.set(prevState.id, addQuestion),
      id: prevState.id + 1,
    }));
  }

  changeBorder = (booleanState) => {
    // if clicked, make it a thick green border
    if (!booleanState) {
      this.setState(prevState => ({
        border: '4px solid #518063',
      }));
    }
    // if not clicked, make it a think green border
    else {
      this.setState(prevState => ({
        border: '1px solid #DEDEDE',
      }));
    }
  }

  handleContinue = () => {
    // add the desired bucket questions to the Map
    if (this.state.classSchedule) {
      const newQuestion = {
        type: 'checkbox',
        name: 'classSchedule',
        title: 'During which time blocks do you have classes or obligations?',
        isRequired: true,
        colCount: 4,
        choices: Map({
          0: '9L', 1: '10', 2: '10A', 3: '11', 4: '12', 5: '2', 6: '2A', 7: '3A', 8: '3B', 9: '6A', 10: '6B',
        }),
        importance: 5,
        similar: true,
      };
      this.addToSurvey(newQuestion);
    }

    if (this.state.cantWorkWith) {
      const newQuestion = {
        type: 'dropdown',
        name: 'cantWorkWith',
        title: 'Is there anyone in the class that you do not want to work with?',
        isRequired: true,
        colCount: 4,
        choices: Map({
          0: 'inputStudent1', 1: 'inputStudent2', 2: 'inputStudent3', 3: 'inputStudent4', 4: 'inputStudent5',
        }),
        importance: 5,
        similar: true,
      };
      this.addToSurvey(newQuestion);
    }

    if (this.state.prefWorkingTime) {
      const newQuestion = {
        type: 'checkbox',
        name: 'prefWorkingTime',
        title: 'What time of day do you prefer to work with your team?',
        isRequired: true,
        colCount: 4,
        choices: Map({
          0: 'Early morning (6:00 am - 9:00 am)',
          1: 'Morning (9:00 am - 12:00 pm)',
          2: 'Early afternoon (12:00 pm - 3:00 pm)',
          3: 'Late Afternoon (3:00 pm - 6:00 pm)',
          4: 'Evening (6:00 pm - 9:00 pm)',
          5: 'Late evening (9:00 pm - 12:00 am)',
          6: 'Other: 12:00 am - 3:00 am)',
        }),
        importance: 5,
        similar: true,
      };
      this.addToSurvey(newQuestion);
    }

    if (this.state.workingStyles) {
      const newQuestion = {
        type: 'radiogroup',
        name: 'workingStyles',
        title: 'How would you describe your teamwork or working style?',
        isRequired: true,
        colCount: 4,
        choices: Map({
          0: 'Analytical: I like to get as much information as possible before making a decision. Information not emotion is the key to getting things done. When I\'m ready to speak it\'s because I have the information I need to respond',
          1: 'Driver: I like to get things done. I don\'t get caught up in the details. When people get off track or deliberate too much that can frustrate me. I like to make a decision and see it to the end.',
          2: 'Collaborative: I like to help people get things done. If there is a conflict on a team I like to help people work it out. I like to mediate and facilitate conversations.',
          3: 'Creative: I like to see things from many angles. I don\'t rush to a solution. If we have to take a step back and approach a problem from a new direction that\'s OK with me.',
        }),
        importance: 5,
        similar: true,
      };
      this.addToSurvey(newQuestion);
    }

    if (this.state.ethnicity) {
      const newQuestion = {
        type: 'checkbox',
        name: 'ethnicity',
        title: 'What is your ethnicity?',
        hasOther: true,
        isRequired: true,
        colCount: 4,
        choices: Map({
          0: 'Asian, Pacific Islander',
          1: 'Black or African American',
          2: 'Hispanic or Latino',
          3: 'Native American or American Indian',
          4: 'White',
          5: 'Prefer not to say',
        }),
        importance: 5,
        similar: true,
      };
      this.addToSurvey(newQuestion);
    }

    if (this.state.gender) {
      const newQuestion = {
        type: 'radiogroup',
        name: 'gender',
        title: 'Which gender do you identify with? ',
        hasOther: true,
        isRequired: true,
        colCount: 4,
        choices: Map({
          0: 'Female',
          1: 'Male',
          2: 'Prefer not to say',
        }),
        importance: 5,
        similar: true,
      };
      this.addToSurvey(newQuestion);
    }

    // change the display page
    this.setState(prevState => ({
      continue: true,
    }));
  }

  render() {
    // if continue button not clicked display buckets
    if (!this.state.continue) {
      return (
        <div>
          <button className="goToDashboard" type="button" onClick={this.props.goToDashboard}>
            <FontAwesomeIcon icon="chevron-left" /> Survey Dashboard
          </button>
          <button className="regularGreen" type="button" onClick={this.handleContinue}> Continue </button>
          <h1> Question Bucket </h1>
          <p> Before you begin, you can select pre-made questions that the Team Formation Tool Store in its bucket. Click on the tile to add it to your survey.
          Click on a highlighted tile to remove it from your survey. Click the expand icon to view the exact question wording and the answers. You can also
          access the bucket anytime underneath the question menu bar on the right side of the screen.
          </p>
          <button className="bucket" type="button" style={{ border: this.state.border }} onClick={this.classSchedule}> Class Schedule </button>
          <button className="bucket" type="button" onClick={this.cantWorkWith}> Who do you not want to work with? </button>
          <button className="bucket" type="button" onClick={this.prefWorkingTime}> Preferred Working Time </button>
          <button className="bucket" type="button" onClick={this.workingStyles}> Preferred Working Style </button>
          <button className="bucket" type="button" onClick={this.ethnicity}> Ethnicity </button>
          <button className="bucket" type="button" onClick={this.gender}> Preferred Gender </button>
        </div>
      );
    }
    // once continue button clicked, display the Questions Page
    return (
      <QuestionsPage initialQuestionMap={this.state.initialQuestionMap} goToDashboard={this.props.goToDashboard} />
    );
  }
}

// <button type="button" onClick={}> Athletics </button>
// <button type="button" onClick={}> Greek Affiliation </button>


// lEARNING: can print props
// console.log(this.props);
