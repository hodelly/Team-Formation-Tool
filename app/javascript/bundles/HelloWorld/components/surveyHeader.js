import React from 'react';
// icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
// date picking
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';


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

  updateSurveyDueDate = (day) => {
    this.props.updateSurveyDueDate(day);
  }


  render() {
    // if continue button not clicked display buckets
    return (
      <div className="surveyHeader">
        <input className="surveyTitle" type="text" placeholder="ENGS 21 Group Formation Survey" value={this.props.surveyTitle} onChange={this.updateSurveyTitle} />
        <input className="surveyInfo" type="text" placeholder="Survey Description" value={this.props.surveyDescription} onChange={this.updateSurveyDescription} />
        <DayPickerInput
          formatDate={formatDate}
          parseDate={parseDate}
          className="datePicker"
          placeholder="Survey due date"
          onDayChange={day => this.updateSurveyDueDate(day)} // LEARNING: use of handler that sends props
        />

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
