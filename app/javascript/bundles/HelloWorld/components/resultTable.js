import React from 'react';
import GroupNumberModal from './groupNumberModal';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
// import moment from 'moment';


export default class resultTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
    };
  }

  componentDidMount(props) {

  }

  handleClose = () => {
    this.setState({ modalShow: false });
  };

  handleOpen = () => {
    this.setState({ modalShow: true });
  };

  render() {
    console.log(this.props.responses);
    console.log(this.props.questions);
    return (
      <div id="results_questions">
        <div id="result_table_header">
          <h1>Completed</h1>
          <button className="regularGreen" type="button" onClick={this.props.showQs}> Change Weights </button>
          <button className="regularGreen" type="button" onClick={this.handleOpen}> Generate Groups </button>
          <GroupNumberModal canvas={this.props.canvas} isOpen={this.state.modalShow} close={this.handleClose} />
        </div>

      </div>
    );
  }
}
