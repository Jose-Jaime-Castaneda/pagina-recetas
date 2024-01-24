import { getAllRecipesURL, getOneRecipeURL } from "../../constants/constants";

// Obtiene todas las recetas
export async function getAllRecipes() {
  try {
    const response = await fetch(getAllRecipesURL);

    if (!response.ok) {
      throw new Error(
        `Error al obener los datos. Código HTTP: ${response.status}`
      );
    }

    const data = await response.json();
    return data.recipes;
  } catch (error) {
    throw new Error(`Error en la solicitud: ${error.message}`);
  }
}
// Obtiene una receta
export async function getOneRecipe(id) {
  try {
    const response = await fetch(getOneRecipeURL + id);

    if (!response.ok) {
      throw new Error(
        `Error al obener los datos. Código HTTP: ${response.status}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error en la solicitud: ${error.message}`);
  }
}
