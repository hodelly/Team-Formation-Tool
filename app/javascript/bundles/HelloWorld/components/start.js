import React from 'react';
import { Link } from 'react-router-dom';


export default class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div>
        <p>
The Group Formation Tool is designed to help instructors create successful student teams by intentionally
        forming them based on chosen criteria.
        </p>
        <p>
        Using specific criteria when assigning students to teams can result in improved learning for all students.
        Instructors can choose from a list of questions, or create their own questions, on the following pages,
        then deploy a survey to their students. These responses will then be used to automatically place students
        in groups that are as optimal as possible based on the criteria.
        </p>
        <p>
        If you have questions about the use of this tool, please contact
          {' '}
          <b>learning.design.tech@dartmouth.edu</b>
.
        </p>
        <Link to="/dashboard"><button className="regularGreen" type="button"> Get Started </button></Link>
      </div>
    );
  }
}
