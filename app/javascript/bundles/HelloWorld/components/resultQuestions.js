import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';


export default class resultQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // questions: '',
    };
  }

  componentDidMount(props) {

  }


  render() {
    console.log(this.props.questions);
    return (
      <div id="results_questions">
        <p> questions page</p>
      </div>
    );
  }
}
