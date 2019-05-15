import React from 'react';

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editState: false, titleValue: props.title };
    this.deleteMe = this.deleteMe.bind(this);
    this.saveMe = this.saveMe.bind(this);
    this.editMe = this.editMe.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  deleteMe() {
    this.props.deleteQuestion(this.props.id);
  }

  saveMe() {
    this.props.updateQuestion(this.props.id, { title: this.state.titleValue });
    this.setState({ editState: false });
  }

  editMe() {
    this.setState({ editState: true });
  }

  handleTitleChange(event) {
    this.setState({ titleValue: event.target.value });
  }

  render() {
    const divStyle = {
      background: '40%',
      color: '#5d4bdf',
      border: '5px solid pink',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    };

    const title = this.state.editState
      ? (
        <label htmlFor="title">
Question Title:
          <input type="text" value={this.state.titleValue} onChange={this.handleTitleChange} />
        </label>
      )
      : (
        <h2>
          {' '}
title
          {this.props.title}
          {' '}

        </h2>
      );

    const buttons = this.state.editState
      ? (
        <button type="button" onClick={this.saveMe}>
        Save
        </button>
      )
      : (
        <div>
          <button type="button" onClick={this.deleteMe}>
          Delete
          </button>
          <button type="button" onClick={this.editMe}>
          Edit
          </button>
        </div>
      );

    console.log('props');
    console.log(this.props);
    return (
      <div style={divStyle}>
        {title}
        <p>
          {' '}
choices
          {this.props.choices}
          {' '}

        </p>
        <p>
          {' '}
isRequired
          {String(this.props.isRequired)}
          {' '}

        </p>
        <p>
          {' '}
type
          {this.props.type}
          {' '}

        </p>
        <p>
          {' '}
weight
          {this.props.weight}
          {' '}

        </p>
        {buttons}
      </div>
    );
  }
}
