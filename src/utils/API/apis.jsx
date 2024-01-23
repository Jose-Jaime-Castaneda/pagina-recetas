import { getAllRecipesURL } from "../../constants/constants";
import { getOneRecipeURL } from "../../constants/constants";

export async function getAllRecipes() {
  return await fetch(getAllRecipesURL)
    .then((res) => {
      if (!res.ok) {
        throw new Error(
          `Error al obener los datos. Código HTTP: ${res.status}`
        );
      }
      return res.json();
    })
    .then((data) => data.recipes)
    .catch((error) => {
      throw new Error(`Error en la solicitud: ${error.message}`);
    });
}

export async function getOneRecipe(id) {
  return await fetch(getOneRecipeURL + id)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error en la solicitud: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => data)
    .catch((error) => {
      throw new Error(`Error en la solicitud: ${error.message}`);
    });
}
