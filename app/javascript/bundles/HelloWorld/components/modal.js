import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
// icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import prefWorkingTimeImage from '../utils/prefWorkingTimeImage.png';
import cantWorkWithImage from '../utils/cantWorkWithImage.png';
import classScheduleImage from '../utils/classScheduleImage.png';
import ethnicityImage from '../utils/ethnicityImage.png';
import genderImage from '../utils/genderImage.png';
import greekLifeImage from '../utils/greekLifeImage.png';
import workingStyleImage from '../utils/workingStyleImage.png';
import athleticsImage from '../utils/athleticsImage.png';


library.add(faTimes, faExpandArrowsAlt);


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
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    borderRadius: '10px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit,
    outline: 'none',
  },
});

class SimpleModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    console.log(this.props.questionImagePath);
    let questionImagePath = 'undefined';
    // TO DO: needs to be better way of doing this. Why doesn't props method way work??
    if (this.props.questionImagePath === 'prefWorkingTimeImage') questionImagePath = prefWorkingTimeImage;
    else if (this.props.questionImagePath === 'cantWorkWithImage') questionImagePath = cantWorkWithImage;
    else if (this.props.questionImagePath === 'classScheduleImage') questionImagePath = classScheduleImage;
    else if (this.props.questionImagePath === 'ethnicityImage') questionImagePath = ethnicityImage;
    else if (this.props.questionImagePath === 'genderImage') questionImagePath = genderImage;
    else if (this.props.questionImagePath === 'greekLifeImage') questionImagePath = greekLifeImage;
    else if (this.props.questionImagePath === 'workingStyleImage') questionImagePath = workingStyleImage;
    else if (this.props.questionImagePath === 'athleticsImage') questionImagePath = athleticsImage;

    const { classes } = this.props;
    return (
      <div>
        <Button onClick={this.handleOpen}><span className="italics">Details</span></Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Button type="button" onClick={this.handleClose}> <FontAwesomeIcon icon="times" /> </Button>
            <img src={questionImagePath} width="100%" height="undefined" alt={questionImagePath} />
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
