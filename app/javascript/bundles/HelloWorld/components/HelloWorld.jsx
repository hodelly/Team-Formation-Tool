// import PropTypes from 'prop-types';
import React from 'react';
import QuestionsPage from './questionsPage';


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
      onDashboard: true,
    };
  }

  goToQuestionsPage = () => {
    this.setState({
      onQuestionsPage: true,
      onDashboard: false,
    });
  }

  goToDashboard = () => {
    this.setState({
      onDashboard: true,
      onQuestionsPage: false,

    });
  }


  render() {
    if (this.state.onQuestionsPage) {
      return (
        <div>
          <QuestionsPage goToDashboard={this.goToDashboard} />
        </div>
      );
    }
    if (this.state.onDashboard) {
      return (
        <div>
          <p> dashboard
          </p>
          <button type="button" onClick={this.goToQuestionsPage}> Create Survey </button>
        </div>
      );
    }
    return (null);
  }
}
