import { useState, useEffect } from 'react';
import CardComponent from './components/CardComponent';
import SearchBar from './components/SearchBar';
import './App.css';

const api_url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const searchRecipe = async () => {
    setIsLoading(true);
    const url = api_url + query;
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals);
    setIsLoading(false);
  };

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipe();
  };

  useEffect(() => {
    searchRecipe();
  }, [query]);

  return (
    <div className="container">
      <h3>EROOM RECIPES</h3>
      <SearchBar
  value={query}
  isLoading={isLoading}
  handleSubmit={handleSubmit}
  onChange={handleSearch}
/>
      <div className="Recipes">
        {recipes ? (
          recipes.map((recipe) => (
            <CardComponent key={recipe.idMeal} recipe={recipe} />
          ))
        ) : (
          <p>NO RECIPES</p>
        )}
      </div>
    </div>
  );
}

export default App;
