import actionTypes from '../constants/courseCorrectWebAppConstants';

export function updateName(name) {
  return {
    type: actionTypes.COURSE_CORRECT_NAME_UPDATE,
    name,
  };
}
