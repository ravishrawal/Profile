const axios = require('axios');
const Recipe = require('./db/Recipe');

const storeToDB = (array)=>{
  array.forEach(hit => {
    let name = hit.recipe.label;
    let servings = hit.recipe.yield;
    let fat = hit.recipe.totalNutrients.FAT.quantity/servings;
    let carbs = hit.recipe.totalNutrients.CHOCDF.quantity/servings;
    let protein = hit.recipe.totalNutrients.PROCNT.quantity/servings;
    let sugar = hit.recipe.totalNutrients.SUGAR.quantity/servings;
    let { healthLabels, image, url, calories } = hit.recipe;
    Recipe.create({
      name,
      calories,
      fat,
      carbs,
      protein,
      sugar,
      healthLabels,
      image,
      url
    })
  })
}

const getRecipes = (ingredient) => {
  axios.get(`https://api.edamam.com/search?q=${ingredient}&app_id=854c0536&app_key=bc7e5c55e4d885d6a394368476b871f9`)
  .then(res=>res.data.hits)
  .then(hits=>{
    storeToDB(hits);
  })
  .catch(er => console.log(er))
}

getRecipes('tofu');
getRecipes('chicken');
getRecipes('beef');
getRecipes('egg');
// getRecipes('pork');
// getRecipes('cheese');
// getRecipes('lamb');
// getRecipes('chocolate');
// getRecipes('bacon');
