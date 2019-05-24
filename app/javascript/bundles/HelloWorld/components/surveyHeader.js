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
      <div>
        <input type="text" defaultValue="ENGS 21 Group Formation Survey" onClick={this.props.updateTitle} />
        <input type="text" defaultValue="Survey Description" onClick={this.props.updateDescription} />
        <input type="text" defaultValue="Survey due date" onClick={this.props.updateDueDate} />
        <p> The group formation tool automatically retrieves this data from Canvas: <br />
          Student First and Last Name <br />
          Student NetID <br />
          Student Graduation Year <br />
        </p>
      </div>
    );
  }
}
