import React from "react";
import { Link } from "react-router-dom";
import "./styles/recipeList.css";
import { useNavigate } from "react-router-dom";

import { getAllRecipes } from "../../utils/API/apis";
import { handleVolverInicio } from "../../utils/buttonHandlers/handlers";

import Button from "../button/buttonSimple";

function RecipeList() {
  const [recipes, setRecipes] = React.useState([]);

  React.useEffect(() => {
    getAllRecipes()
      .then((recipes) => {
        console.log(recipes);
        setRecipes(recipes);
      })
      .catch((error) => {
        console.log("Error al obtener los datos:", error);
      });
  }, []);

  const navegador = useNavigate();
  return (
    <section className="sectionContainer">
      <div className="buttonContainer buttonVolver">
        <Button
          label={"Volver"}
          onClick={() => handleVolverInicio(navegador)}
        />
      </div>
      <h2>Recipe List</h2>
      <ul className="list">
        {recipes.map((recipe, index) => (
          <Link
            to={`/recipeDetails/${recipe.id}`}
            key={index}
            className="cardLink"
          >
            <li
              className="card"
              style={{
                backgroundImage: `url(${recipe.image})`,
                backgroundSize: "cover",
              }}
            >
              {recipe.name}
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
}

export default RecipeList;
