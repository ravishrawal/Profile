import axios from 'axios';

//ACTION TYPES

const GET_EXPERIENCES = 'GET_EXPERIENCES';

//ACTION CREATORS

export const setExperiences = (experiences) => {
  return {
    type: GET_EXPERIENCES,
    experiences
  };
};

//THUNK CREATORS

export const getExperiences = (flag) => {
  const option = flag ? `field=${flag}` : '';
  return (dispatch) => {
    axios.get(`/api/experience?${option}`)
    .then(res => res.data)
    .then(experiences => dispatch(setExperiences(experiences)) )
    .catch(er => console.log('err with AJAX call for experiences: ', er.message))
  }
}

//REDUCER

export default (state = [], action) => {
  switch (action.type) {
    case GET_EXPERIENCES:
      return action.experiences;
    default:
      return state;
  }
}
