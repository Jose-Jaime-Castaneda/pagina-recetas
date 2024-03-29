import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./styles/recipeDetails.css";

import { handleLista } from "../../utils/buttonHandlers/handlers";
import { getOneRecipe } from "../../utils/API/apis";
import Button from "../../components/button/buttonSimple";

// En este componente pintamos la información de una receta
function RecipeDetails() {
  const navegador = useNavigate();
  const { id } = useParams();
  const [recipeDetail, setRecipeDetail] = React.useState({});

  React.useEffect(() => {
    getOneRecipe(id)
      .then((recipe) => {
        //console.log(recipe);
        setRecipeDetail(recipe);
      })
      .catch((error) => {
        console.log("Error al obtener los datos:", error);
      });
  }, []);

  return (
    <article className="detailContainer">
      <div className="buttonContainer buttonVolver">
        <Button label={"Volver"} onClick={() => handleLista(navegador)} />
      </div>
      <div
        style={{
          backgroundImage: `url(${recipeDetail.image})`,
        }}
        className="imageCover"
      >
        <h2 className="detailTitle">{recipeDetail.name}</h2>
      </div>
      <div className="ingredients-extra-container">
        <div className="ingredientsContainer">
          <p className="label">Ingredients: </p>
          {recipeDetail.ingredients && recipeDetail.ingredients.length > 0 ? (
            <ul className="ingredientsList">
              {recipeDetail.ingredients.map((ingredient) => (
                <li key={id}>{ingredient}</li>
              ))}
            </ul>
          ) : (
            <p>No ingredients available.</p>
          )}
        </div>
        <div className="extraDetails">
          <p className="label">Details: </p>
          <ul className="extraDetailsList">
            <li>
              <span>Cousin</span> -{">"} {recipeDetail.cuisine}
            </li>
            <li>
              <span>Difficulty</span> -{">"} {recipeDetail.difficulty}
            </li>
            <li>
              Total time:{" "}
              {recipeDetail.prepTimeMinutes + recipeDetail.cookTimeMinutes}
              min
            </li>
            <li>{recipeDetail.caloriesPerServing} calories</li>
          </ul>
        </div>
      </div>
      <div className="instructionContainer">
        <p className="label">Instructions: </p>
        {recipeDetail.instructions && recipeDetail.instructions.length > 0 ? (
          <ul className="intructionsList">
            {recipeDetail.instructions.map((instruction) => (
              <li key={id}>{instruction}</li>
            ))}
          </ul>
        ) : (
          <p>No instructions available.</p>
        )}
      </div>
    </article>
  );
}

export default RecipeDetails;
