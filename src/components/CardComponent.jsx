import React from 'react';

function CardComponent({ recipe }) {
  const { idMeal, strMeal, strCategory, strMealThumb } = recipe;

  return (
    <div className="card">
      <img src={strMealThumb} alt={strMeal} className="cardImage" />
      <div className="cardBody">
        <span>category{strCategory}</span>
        <h3>{strMeal}</h3>
        <a href={"https://www.themealdb.com/meal/" + idMeal} target="_blank" rel="noopener noreferrer">
          ingredients
        </a>
      </div>
    </div>
  );
}

export default CardComponent;
