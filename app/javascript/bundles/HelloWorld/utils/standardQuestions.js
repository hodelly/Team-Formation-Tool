import { Map } from 'immutable';

export const genderQuestion = {
  type: 'radiogroup',
  name: 'gender',
  title: 'Which gender do you identify with? ',
  hasOther: true,
  isRequired: true,
  colCount: 1,
  choices: Map({
    0: 'Female',
    1: 'Male',
    2: 'Prefer not to say',
  }),
  importance: 3,
  similar: true,
};


export const ethnicityQuestion = {
  type: 'checkbox',
  name: 'ethnicity',
  title: 'What is your ethnicity?',
  hasOther: true,
  isRequired: true,
  colCount: 1,
  choices: Map({
    0: 'Asian, Pacific Islander',
    1: 'Black or African American',
    2: 'Hispanic or Latino',
    3: 'Native American or American Indian',
    4: 'White',
    5: 'Prefer not to say',
  }),
  importance: 3,
  similar: true,
};

export const workingStyleQuestion = {
  type: 'radiogroup',
  name: 'workingStyle',
  title: 'How would you describe your teamwork or working style?',
  isRequired: true,
  colCount: 4,
  choices: Map({
    0: 'Analytical: I like to get as much information as possible before making a decision. Information not emotion is the key to getting things done. When I\'m ready to speak it\'s because I have the information I need to respond',
    1: 'Driver: I like to get things done. I don\'t get caught up in the details. When people get off track or deliberate too much that can frustrate me. I like to make a decision and see it to the end.',
    2: 'Collaborative: I like to help people get things done. If there is a conflict on a team I like to help people work it out. I like to mediate and facilitate conversations.',
    3: 'Creative: I like to see things from many angles. I don\'t rush to a solution. If we have to take a step back and approach a problem from a new direction that\'s OK with me.',
  }),
  importance: 3,
  similar: false,
};

export const prefWorkingTimeQuestion = {
  type: 'checkbox',
  name: 'prefWorkingTime',
  title: 'What time of day do you prefer to work with your team?',
  isRequired: true,
  colCount: 4,
  choices: Map({
    0: 'Early morning (6:00 am - 9:00 am)',
    1: 'Morning (9:00 am - 12:00 pm)',
    2: 'Early afternoon (12:00 pm - 3:00 pm)',
    3: 'Late Afternoon (3:00 pm - 6:00 pm)',
    4: 'Evening (6:00 pm - 9:00 pm)',
    5: 'Late evening (9:00 pm - 12:00 am)',
    6: 'Other: 12:00 am - 3:00 am)',
  }),
  importance: 3,
  similar: true,
};

export const cantWorkWithQuestion = {
  type: 'dropdown',
  name: 'cantWorkWith',
  title: 'Is there anyone in the class that you do not want to work with?',
  isRequired: true,
  colCount: 4,
  choices: Map({
    0: 'inputStudent1', 1: 'inputStudent2', 2: 'inputStudent3', 3: 'inputStudent4', 4: 'inputStudent5',
  }),
  importance: 3,
  similar: true,
};

export const classScheduleQuestion = {
  type: 'checkbox',
  name: 'classSchedule',
  title: 'What time blocks do you have classes or obligations during?',
  isRequired: true,
  colCount: 4,
  choices: Map({
    0: '9L', 1: '10', 2: '10A', 3: '11', 4: '12', 5: '2', 6: '2A', 7: '3A', 8: '3B', 9: '6A', 10: '6B',
  }),
  importance: 3,
  similar: true,
};

export const athleticsQuestion = {
  type: 'radiogroup',
  name: 'athletics',
  title: 'Do you play a varsity sport?',
  isRequired: true,
  colCount: 4,
  choices: Map({
    0: 'Yes', 1: 'No',
  }),
  importance: 3,
  similar: false,
};

export const greekLifeQuestion = {
  type: 'radiogroup',
  name: 'athletics',
  title: 'Are you affilated with Greek Life?',
  isRequired: true,
  colCount: 4,
  choices: Map({
    0: 'Yes', 1: 'No',
  }),
  importance: 3,
  similar: false,
};
