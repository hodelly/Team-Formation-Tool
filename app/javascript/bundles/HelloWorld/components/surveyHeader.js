import React from 'react';
// icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
// date picking
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';


library.add(faTrash);

export default class SurveyHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  updateSurveyTitle = (event) => {
    this.props.updateSurveyTitle(event.target.value);
  }

  updateSurveyDescription = (event) => {
    this.props.updateSurveyDescription(event.target.value);
  }

  updateSurveyDueDate = (event) => {
    this.props.updateSurveyDueDate(event.target.value);
  }


  render() {
    // if continue button not clicked display buckets
    return (
      <div className="surveyHeader">
        <input className="surveyTitle" type="text" placeholder="ENGS 21 Group Formation Survey" value={this.props.surveyTitle} onChange={this.updateSurveyTitle} />
        <input className="surveyInfo" type="text" placeholder="Survey Description" value={this.props.surveyDescription} onChange={this.updateSurveyDescription} />
        <input className="surveyInfo" type="text" placeholder="Survey due date" value={this.props.surveyDueDate} onChange={this.updateSurveyDueDate} />
        <div>
          <p>Please type a day:</p>
          <DayPickerInput onDayChange={day => console.log(day)} />
        </div>

        <p> <span className="bold"> The group formation tool automatically retrieves this data from Canvas: </span> <br />
          <span className="italics"> Student First and Last Name <br />
          Student NetID <br />
          Student Graduation Year <br />
          </span>
        </p>
      </div>
    );
  }
}
