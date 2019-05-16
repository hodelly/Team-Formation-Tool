import React from 'react';

export default class GroupNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div className="groupNumber">
        <h1>You have ## student in DEPT XX.</h1>
        <h1> How many students would you like per group?</h1>
        <input placeholder="Number of groups" />
      </div>
    );
  }
}
