import React from 'react';
import { Link } from 'react-router-dom';
// icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


library.add(faTrash);

export default class PreSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    // if continue button not clicked display buckets
    const buttons = this.props.initialQuestionMap.entrySeq().map(([key, clicked]) => {
      if (clicked) {
        return (<button className="bucket" type="button" style={{ border: '4px solid #518063' }} onClick={() => { this.props.handleClick(key); }}> {key} </button>);
      }
      // else
      return (<button className="bucket" type="button" style={{ border: '1px solid #DEDEDE' }} onClick={() => { this.props.handleClick(key); }}> {key} </button>);
    });

    return (
      <div>
        <Link to="/dashboard">
          <button className="goToDashboard" type="button"> <FontAwesomeIcon icon="chevron-left" /> Survey Dashboard </button>
        </Link>
        <button className="regularGreen" type="button" onClick={this.props.handleContinue}> Continue </button>
        <h1> Question Bucket </h1>
        <p> Before you begin, you can select pre-made questions that the Team Formation Tool Store in its bucket. Click on the tile to add it to your survey.
          Click on a highlighted tile to remove it from your survey. Click the expand icon to view the exact question wording and the answers. You can also
          access the bucket anytime underneath the question menu bar on the right side of the screen.
        </p>
        {buttons}
      </div>
    );
  }
}


// lEARNING: (1) can print props (2) can pass parameters into eventHandling functions (3) how to change style in react
// (4) for a series of components, always try to create them through a map of ints, always avoid hard coding them in! (bars/buttons..)
// console.log(this.props);
