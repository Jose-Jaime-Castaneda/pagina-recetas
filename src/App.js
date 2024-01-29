import { Routes, Route } from "react-router-dom";

import MainComponent from './pages/mainComponent/main';
import RecipeList from './pages/recipeList/recipeList';
import RecipeDetails from "./pages/recipeDetails/recipeDetails";

// Aquí se declaran las rutas para el proyecto
function App() {
  return (
    <Routes>
      <Route path='/' element={<MainComponent />} />
      <Route path="/recipeList" element={<RecipeList />} />
      <Route path="/recipeDetails/:id" element={<RecipeDetails />} />
    </Routes>
  );
}

export default App;
