import axios from 'axios';

const ROOT_URL = 'http://localhost:3000';

export function fetchSurveys() {
  // return (dispatch) => {
  console.log('in fetch surveys');
  axios.get(`${ROOT_URL}/api/v1/surveys`).then((response) => {
    console.log(response.data);
  }).catch((error) => {
    console.log(error);
  });
  // };
}

export function postSurvey(survey) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/api/v1/surveys`, survey).then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });
  };
}
