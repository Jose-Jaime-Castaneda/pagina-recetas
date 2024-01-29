import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/recipeList.css";

import { getAllRecipes } from "../../utils/API/apis";
import { handleVolverInicio } from "../../utils/buttonHandlers/handlers";

import Button from "../../components/button/buttonSimple";

//En este componente se pintan todas recetas
function RecipeList() {
  const [recipes, setRecipes] = React.useState([]);

  React.useEffect(() => {
    getAllRecipes()
      .then((recipeLsit) => {
        console.log(recipeLsit);
        setRecipes(recipeLsit);
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
        {recipes.map((recipe) => (
          <Link
            to={`/recipeDetails/${recipe.id}`}
            key={recipe.id}
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
