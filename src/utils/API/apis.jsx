import { getAllRecipesURL, getOneRecipeURL } from "../../constants/constants";

// Obtiene todas las recetas
export async function getAllRecipes() {
  return fetch(getAllRecipesURL)
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
// Obtiene una receta
export async function getOneRecipe(id) {
  return fetch(getOneRecipeURL + id)
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
