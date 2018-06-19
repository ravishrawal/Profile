import axios from 'axios';

//ACTION TYPES

const GET_EDUCATION = 'GET_EDUCATION';

//ACTION CREATORS

export const setEducation = (education) => {
  return {
    type: GET_EDUCATION,
    education
  };
};

//THUNK CREATORS

export const getEducation = (flag) => {
  const option = flag ? `field=${flag}` : '';
  return (dispatch) => {
    axios.get(`/api/education?${option}`)
    .then(res => res.data)
    .then(education => dispatch(setEducation(education)) )
    .catch(er => console.log('err with AJAX call for education: ', er.message))
  }
}

//REDUCER

export default (state = [], action) => {
  switch (action.type) {
    case GET_EDUCATION:
      return action.education;
    default:
      return state;
  }
}
