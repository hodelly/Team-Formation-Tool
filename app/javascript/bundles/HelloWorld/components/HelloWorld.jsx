// import PropTypes from 'prop-types';
import React from 'react';
import QuestionsPage from './questionsPage';
// import CreateSurvey from './CreateSurvey';

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
    };
  }

goToQuestionsPage = () => {
  this.setState({
    onQuestionsPage: true,
  });
}


render() {
  if (this.state.onQuestionsPage) {
    return (
      <div>
        <QuestionsPage />
      </div>
    );
  }
  return (
    <div>
      <p> dashboard </p>
      <button type="button" onClick={this.goToQuestionsPage}> Create Survey </button>
    </div>
  );
}
}


//   constructor(props) {
//     super(props);
//     // How to set initial state in ES6 class syntax
//     // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
//     this.state = { name: this.props.name };
//   }
//
//   render() {
//     /*
//     Right now this is a "create survey component". We can add other things like review groups, finalize groups etc.
//     Create survey is really just for adding a new question right now
//     */
//     return (
//       <div>
//         <CreateSurvey />
//       </div>
//     );
//   }
// }
