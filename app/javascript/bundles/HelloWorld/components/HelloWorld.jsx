// import PropTypes from 'prop-types';
import React from 'react';
import QuestionsPage from './questionsPage';
import Dashboard from './dashboard';
import Start from './start';
import GroupNumber from './GroupNumber';

// The HelloWorld class used to have the starter code before and now it will be the basis of our code
export default class HelloWorld extends React.Component {
  // static propTypes = {
  //   name: PropTypes.string.isRequired, // this is passed from the Rails view
  // };

  /**
   * @param props - Comes from your rails view.
   */

  constructor(props) {
    super(props);
    this.state = {
      onQuestionsPage: false,
      onDashboard: false,
      onStart: true,
      onGroupNumber: false,
    };
  }

  goToQuestionsPage = () => {
    this.setState({
      onQuestionsPage: true,
      onDashboard: false,
      onStart: false,
      onGroupNumber: false,
    });
  }

  goToDashboard = () => {
    this.setState({
      onDashboard: true,
      onQuestionsPage: false,
      onStart: false,
      onGroupNumber: false,
    });
  }
  goToGroupNumber = () => {
    this.setState({
      onDashboard: false,
      onQuestionsPage: false,
      onStart: false,
      onGroupNumber: true,
    });
  }


  render() {
    if (this.state.onQuestionsPage) {
      return (
        <div>
          <QuestionsPage goToDashboard={this.goToDashboard} goToGroupNumber={this.goToGroupNumber}/>
        </div>
      );
    }
    if (this.state.onDashboard) {
      return (
        <div>
          <button className="regularGreen" type="button" onClick={this.goToQuestionsPage}> Create Survey </button>
          <Dashboard />
        </div>
      );
    }
    if (this.state.onStart) {
      return(
        <div>
          <Start/>
          <button className="regularGreen" type="button" onClick={this.goToDashboard}> Get Started </button>

        </div>
      )
    }
    if (this.state.onGroupNumber) {
      return(
        <div>
          <GroupNumber cancel={this.goToDashboard}/>


        </div>
      )
    }
    return (null);
  }
  return (null);
}
}
