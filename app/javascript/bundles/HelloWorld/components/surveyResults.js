import React from 'react';
// import axios from 'axios';

export default class surveyResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      survey: '',
    };
  }

  componentDidMount(props) {
    // axios.get(`http://localhost:3000/api/v1/surveys/${this.props.match.params.id}`).then((response) => {
    //   console.log(response.data);
    //   this.setState({ survey: response.data });
    // }).catch((error) => {
    //   console.log(error);
    // });
  }


  render() {
    console.log(this.state.survey);
    return (
      <div>survey results for {this.props.match.params.id}</div>
    );
  }
}
