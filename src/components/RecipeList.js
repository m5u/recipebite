import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import Recipe from "../components/Recipe";
import SearchRecipe from "../components/SearchRecipe";
import { useLocation } from "react-router-dom";

const RecipeList = () => {
  const { searchResult, setDishTypeCheck, filterRecipes } =
    useContext(GlobalContext);

  const recipePerRow = 8;
  const [next, setNext] = useState(recipePerRow);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  useEffect(() => {
    // Simulating data fetching delay

    if (location && location.state) {
      if (location.state.dishType) {
        debugger;
        setDishTypeCheck([location.state.dishType]);
        const fitlerRecipeByCategory = {
          dishType: [location.state.dishType],
        };
        filterRecipes(fitlerRecipeByCategory);
      }
    }
    setIsLoading(true);
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(delay);
    };
  }, []);
  // let updatedRecipeList = searchResult;
  // if (searchResult.length > 0) {
  //   debugger;
  //   updatedRecipeList = searchResult.length > 0 ? searchResult : [];
  // } else if (searchRecipe !== "" && searchResult.length === 0) {
  //   updatedRecipeList = [];
  // } else {
  //   updatedRecipeList = recipeList;
  // }

  const loadMore = () => {
    setNext(next + recipePerRow);
  };

  const visibleRecipeList = searchResult.slice(0, next);

  return (
    <>
      <section className="section recipe recipes-list-wrap p-150">
        <div className="container">
          <div className="recipe-wrap">
            <div className="recipe-header">
              <h3>Browse Our Recipes</h3>
              <SearchRecipe />
            </div>
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <>
                <div className="tags">{/* {visibleRecipeList.length} */}</div>
                <div className="recipe-list filter flex flex-wrap">
                  {visibleRecipeList.length > 0 ? (
                    visibleRecipeList.map((recipe) => (
                      <>
                        <Recipe recipe={recipe} key={recipe.id} />
                      </>
                    ))
                  ) : (
                    <div> No recipe found</div>
                  )}
                </div>
                {visibleRecipeList.length < searchResult.length && (
                  <button className="btn btn-primary" onClick={loadMore}>
                    Load More
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default RecipeList;
