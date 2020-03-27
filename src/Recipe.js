import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, image, ingredients, source, url }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <img className={style.image} src={image} alt=""></img>
      <ul>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p>
        Source:<a href={url}>{source}</a>
      </p>
    </div>
  );
};

export default Recipe;
