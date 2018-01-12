import React, {Component} from 'react';
import { connect } from 'react-redux';

import { fetchRecipes } from '../store';

import RecipeCard from './RecipeCard';

import Filter from './Filter';

class Home extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.getRecipes();
  }
  render(){
    return (
      <div>
        <div>
          <h1>Treat Yo Self</h1>
        </div>
        <div className='filtersView'>
          <Filter category="protein" value="50"/>
          <Filter category="carbs"/>
          <Filter category="fat"/>
          <Filter category="sugar"/>
        </div>
        <div className='recipesView'>
          {
            this.props.recipes.map(recipe => {
              return (
                <div key={recipe.id}>
                  <RecipeCard recipe={recipe}/>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ recipes })=>{
  return {
    recipes
  }
};

const mapDispatchToProps = (dispatch)=>{
  return {
    getRecipes: ()=>{
      dispatch(fetchRecipes())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
