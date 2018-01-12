import React from 'react';

import { connect } from 'react-redux';

import { setRecipes } from '../store';

const Filter = (props) => {
  const handleChange = (ev) => {
    props.value=''+ev.target.value;
    let filteredRecipes = props.recipes.filter(recipe => {
      return recipe[props.category] < ev.target.value
    })
    props.filterRecipes(filteredRecipes);
  }
  return (
    <div>
      <h5>{ props.category.toUpperCase() }</h5>
      <input type="range" min="0" max="100" name="filter" onChange={handleChange} ></input>
      <p class='filterValue'>{props.value}</p>
    </div>
  )
}

const mapStateToProps = ({recipes})=>{
  return {
    recipes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterRecipes: (recipes) => {
      dispatch(setRecipes(recipes));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
