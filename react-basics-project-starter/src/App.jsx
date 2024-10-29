import { RecipeListPage } from './pages/RecipeListPage';
import "./index.css"
import { Route, Routes } from 'react-router';
import RecipePage from './pages/RecipePage';
export const App = () => {
  return(
    <>
    <Routes>
    <Route path='/' Element={RecipeListPage}/>
      <Route path='/recipepage' Elementt={RecipePage}/>
    </Routes>

    </>
  );


};
