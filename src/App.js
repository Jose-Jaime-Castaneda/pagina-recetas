import { Routes, Route } from "react-router-dom";

import MainComponent from './components/mainComponent/main';
import RecipeList from './components/recipeList/recipeList';
import RecipeDetails from "./components/recipeDetails/recipeDetails";

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainComponent />} />
      <Route path="/recipeList" element={<RecipeList />}></Route>
      <Route path="/recipeDetails/:id" element={<RecipeDetails />}></Route>
    </Routes>
  );
}

export default App;
