import React from 'react';

export default class GroupNumber extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      total: 25,
      class: 'ENGS 21',
      num: '',
      showWarning: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      num: event.target.value,
    });
  }

  formGroups = () => {
    if (this.state.total % this.state.num !== 0) {
      this.setState({
        showWarning: true,
      });
    } else {
      this.setState({
        showWarning: false,
      });
    }
  }

  renderWarning = () => {
    if (this.state.showWarning) {
      return (
        <div className="group_number_warning">
          <p>
Warning: The students per group number you have picked does not divide the class into groups evenly.
        The group formation tool will distribute the remainder while optimizing for the given characteristics.
          </p>
          <p>
For your current selection, this will yield
            <b> 3 groups of 6</b>
            {' '}
and
            <b> 1 group of 7</b>
.
          </p>
        </div>
      );
    } else {
      return (
        <div />
      );
    }
  }

  render() {
    return (
      <div className="groupNumber">
        <h1>
You have
          {' '}
          {this.state.total}
          {' '}
students in
          {' '}
          {this.state.class}
.
        </h1>
        <h1> How many students would you like per group?</h1>
        <input placeholder="Number of groups" value={this.state.num} onChange={this.handleChange} />
        {this.renderWarning()}
        <button className="invertedGreen" type="button" onClick={this.props.cancel}>Cancel</button>
        <button className="regularGreen" type="button" onClick={this.formGroups}> Form Groups </button>
      </div>
    );
  }
}
