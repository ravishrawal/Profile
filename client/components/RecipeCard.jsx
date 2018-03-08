import React from 'react';

const RecipeCard = (props) => {
  const { name, image, url, id, carbs, protein, fat, sugar, healthLabels } = props.recipe;
  return (
    <a href={url}>
        <h5>{name}</h5>
        <img src={image} />
        <h5>Protein: {protein}g</h5>
        <h5>Carbs: {carbs}g</h5>
        <h5>Fat: {fat}g</h5>
        <h5>Sugar: {sugar}g</h5>
        <p>tags: {healthLabels}</p>
    </a>
  );
};


export default RecipeCard;
