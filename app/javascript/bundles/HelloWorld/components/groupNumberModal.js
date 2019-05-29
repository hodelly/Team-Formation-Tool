import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import axios from 'axios';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 70,
    height: theme.spacing.unit * 25,
    backgroundColor: theme.palette.background.paper,
    borderRadius: '5px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit,
    outline: 'none',
  },
});

class groupNumberModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: 'ENGS 21',
      num: '',
      showWarning: true,
    };
  }


  handleChange = (event) => {
    this.setState({
      num: event.target.value,
    });
  }

  back = () => {
    this.setState({
      showWarning: true,
    });
  }

  next = () => {
    this.setState({
      showWarning: false,
    });
  }

  formGroups = () => {
    axios.post('http://localhost:3000/api/v1/create_groups', this.state.num).then((response) => {
      console.log(response.data);
    });
    this.props.close();
  }

  renderBody = () => {
    if (this.state.showWarning) {
      return (
        <div className="group_num">
          <h1 className="group_num_header">Are you sure?</h1>
          <p className="group_num_p">Some students still haven’t responded to the survey.  Generating groups without their responses will not create the most optimal groups.</p>
          <div className="group_num_buttons">
            <button className="invertedGreen" type="button" onClick={this.props.close}>Cancel</button>
            <button className="regularGreen" type="button" onClick={this.next}> Yes, continue! </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="group_num">
          <h1 className="group_num_header">
    You have
            {' '}
            {this.props.canvas.canvas_enrollments.length}
            {' '}
    students in
            {' '}
            {this.state.class}
    .
          </h1>
          <div className="group_num_p">
            <h1> Target group size: </h1>
            <input placeholder="Number of groups" value={this.state.num} onChange={this.handleChange} />
          </div>
          <div className="group_num_buttons">
            <button className="invertedGreen" type="button" onClick={this.back}>Back</button>
            <button className="regularGreen" type="button" onClick={this.formGroups}> Form Groups </button>
          </div>
        </div>
      );
    }
  }

  render() {
    const { classes } = this.props;
    console.log(this.props.canvas);
    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.isOpen}
          onClose={this.props.close}
        >
          <div style={getModalStyle()} className={classes.paper}>
            {this.renderBody()}
          </div>
        </Modal>

      </div>
    );
  }
}

groupNumberModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const groupNumberModalWrapped = withStyles(styles)(groupNumberModal);

export default groupNumberModalWrapped;
