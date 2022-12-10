import React from 'react';
import styles from './RecipeCard.module.css'
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';


const RecipeCard = ({recipe}) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/recipe/${recipe.recipe_id}`)
}

  return (
    <div className={styles.recipe_card}>
        <h2>{recipe.recipe_name}</h2>
        <img src={recipe.image_url}/>
        
        <button className={styles.blue_btn} onClick={handleClick}>See More!</button>
    </div>
  )
}

export default RecipeCard;