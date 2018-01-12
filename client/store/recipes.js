import axios from 'axios';

//Set up action types
const SET_RECIPES = 'SET_RECIPES';

//Set up action creators

//Allows us to filter without AJAX calls
export const setRecipes = (recipes)=>{
  return {
    type: SET_RECIPES,
    recipes
  };
};

//Set up thunk creators
export const fetchRecipes = ()=>{
  return (dispatch)=>{
    axios.get('/api/recipes')
    .then(res => res.data)
    .then(recipes => {
      dispatch(setRecipes(recipes));
    })
    .catch(err=>console.log(err))
  }
}

//Create reducer
export default (state=[], action)=>{
  switch (action.type){
    case SET_RECIPES:
      return action.recipes
    default:
      return state
  }
}
