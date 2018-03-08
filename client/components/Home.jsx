import React, {Component} from 'react';
import { connect } from 'react-redux';

import { fetchRecipes } from '../store';

import RecipeCard from './RecipeCard';

import Filter from './Filter';

import Login from './Login';

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      filteredRecipes: [],
      protein: '50',
      carbs: '50',
      sugar: '50',
      fat: '50'
    }
    this.filterRecipes = this.filterRecipes.bind(this);
  }
  componentDidMount(){
    this.props.getRecipes()
    setTimeout(()=>this.setState({filteredRecipes: this.props.recipes}), 0);
  }
  filterRecipes(category, value){
    let newRecipes = this.props.recipes.filter((recipe)=>{
      return recipe[category] < value;
    })
    var newState = {filteredRecipes: newRecipes};
    newState[category] = value;
    this.setState(newState);
  }
  render(){
    return (
      <div>
        <div>
          <h1>Treat Yo Self</h1>
          <Login style={{ display:'inline' }} />
        </div>
        <div className='filtersView'>
          <Filter category="protein" filter={this.filterRecipes} val={this.state.protein}/>
          <Filter category="carbs" filter={this.filterRecipes} val={this.state.carbs}/>
          <Filter category="fat" filter={this.filterRecipes} val={this.state.fat}/>
          <Filter category="sugar" filter={this.filterRecipes} val={this.state.sugar}/>
        </div>
        <div className='recipesView'>
          {
            this.state.filteredRecipes.map(recipe => {
              return (
                <div className='recipeCard' key={recipe.id}>
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
