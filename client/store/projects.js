import axios from 'axios';

//ACTION TYPES

const GET_PROJECTS = 'GET_PROJECTS';

//ACTION CREATORS

export const setProjects = (projects) => {
  return {
    type: GET_PROJECTS,
    projects
  };
};

//THUNK CREATORS

export const getProjects = (flag) => {
  const option = flag ? `field=${flag}` : '';
  return (dispatch) => {
    axios.get(`/api/projects?${option}`)
    .then(res => res.data)
    .then(projects => dispatch(setProjects(projects)) )
    .catch(er => console.log('err with AJAX call for projects: ', er.message))
  }
}

//REDUCER

export default (state = [], action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return action.projects;
    default:
      return state;
  }
}
