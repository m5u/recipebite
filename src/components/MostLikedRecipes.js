import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Recipe from "./Recipe";

export default function LatestRecipes() {
  const { recipeList } = useContext(GlobalContext);

  const mostLikedList = recipeList
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 6);

  return (
    <>
      <section className="section most-liked-recipes">
        <div className="container">
          <h2 className="heading">Most Liked Recipes</h2>
          <div className="latest-recipes-list recipes-list">
            {mostLikedList.map((recipe) => (
              <Recipe
                recipe={recipe}
                key={recipe.id}
                showLikes={true}
                showRating={false}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
