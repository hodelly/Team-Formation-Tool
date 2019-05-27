import React from 'react';
// icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
// components


library.add(faTrash);

export default class SurveyHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    // if continue button not clicked display buckets
    return (
      <div className="surveyHeader">
        <input className="surveyTitle" type="text" placeholder="ENGS 21 Group Formation Survey" onClick={this.props.updateTitle} />
        <input className="surveyInfo" type="text" placeholder="Survey Description" onClick={this.props.updateDescription} />
        <input className="surveyInfo" type="text" placeholder="Survey due date" onClick={this.props.updateDueDate} />
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
