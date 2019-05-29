import React from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
// import moment from 'moment';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


export default class resultTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // questions: '',
    };
  }

  componentDidMount(props) {

  }

  render() {
    const classes = makeStyles(theme => ({
      root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
      },
      table: {
        minWidth: 650,
      },
    }));

    console.log(this.props.responses);
    console.log(this.props.questions);
    console.log('here2');
    let qs = null;
    let as = [];
    if (this.props.questions.survey_questions != null) {
      qs = this.props.questions.survey_questions.map((question) => {
        return (
          <TableCell align="right">{question.question.question_title}</TableCell>
        );
      });
      as = [{ id: 'ID1', question: 'q answer 1' }, { id: 'ID2', question: 'q answer 2' }];
    }

    return (
      <div id="results_questions">
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
        <p> responses page</p>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>User ID</TableCell>
                {qs}
              </TableRow>
            </TableHead>
            <TableBody>
              {as.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.question}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}
