import React from 'react';
import { Link } from 'react-router-dom';
// icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import SimpleModal from './modal';
import {
  classScheduleQuestion, cantWorkWithQuestion, prefWorkingTimeQuestion, workingStyleQuestion, genderQuestion, ethnicityQuestion, athleticsQuestion, greekLifeQuestion,
} from '../utils/standardQuestions';

library.add(faTrash);

export default class PreSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    // if continue button not clicked display buckets
    const buttons = this.props.initialQuestionMap.entrySeq().map(([key, clicked]) => {
      let questionTitle = 'invalid question';
      // TO DO: should be a better way than to manually check all the question. Standard Question Array?
      // set title
      if (key === 'gender') questionTitle = 'Gender';
      if (key === 'ethnicity') questionTitle = 'Ethnicity';
      if (key === 'workingStyle') questionTitle = 'Working Style';
      if (key === 'prefWorkingTime') questionTitle = 'Preferred Working Time';
      if (key === 'cantWorkWith') questionTitle = 'Teammate Preference';
      if (key === 'classSchedule') questionTitle = 'Class Schedule';
      if (key === 'athletics') questionTitle = 'Athletics';
      if (key === 'greekLife') questionTitle = 'Greek Affiliation';

      const questionImagePath = `${key}Image`;
      // create buttons
      if (clicked) {
        return (
          <button className="oneBucketDiv" type="button" style={{ border: '4px solid #518063' }} onClick={() => { this.props.handleClick(key); }}>
            <div className="bucketText"> {questionTitle} </div>
            <SimpleModal questionImagePath={questionImagePath} />
          </button>
        );
      }
      // else
      return (
        <button className="oneBucketDiv" type="button" style={{ border: '1px solid #DEDEDE' }} onClick={() => { this.props.handleClick(key); }}>
          <div className="bucketText"> {questionTitle} </div>
          <SimpleModal questionImagePath={questionImagePath} />
        </button>
      );
    });

    return (
      <div>
        <div className="navBar">
          <Link to="/dashboard">
            <button className="goToDashboard" type="button"> <FontAwesomeIcon style={{ background: 'white' }} icon="chevron-left" /> Survey Dashboard </button>
          </Link>
          <button className="regularGreen" type="button" onClick={this.props.handleContinue}> Continue </button>
        </div>
        <div className="pageBody">
          <h7 style={{ fontSize: '17px' }}> Question Bucket </h7>
          <p> Before you begin, you can select pre-made questions that the Team Formation Tool Store in its bucket. <br /> <br />
            1. Click on the tile to add it to your survey. <br />
            2. Click on a highlighted tile to remove it from your survey. <br />
            3. Click the expand icon to view the exact question wording and the answers. <br /> <br />
            You can also access the bucket anytime underneath the question menu bar on the right side of the screen. <br />
          </p>
          <div className="allBuckets">
            {buttons}
          </div>
        </div>
      </div>
    );
  }
}


// lEARNING: (1) can print props (2) can pass parameters into eventHandling functions (3) how to change style in react
// (4) for a series of components, always try to create them through a map of ints, always avoid hard coding them in! (bars/buttons..)
// console.log(this.props);


// <div className="bucketText"> {questionTitle} </div>
