import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Recipe from "./Recipe";

export default function LatestRecipes() {
  const { recipeList } = useContext(GlobalContext);
  const latestList = recipeList.sort((a, b) => b.id - a.id);
  const sortedList = latestList.slice(0, 6);

  return (
    <>
      <section className="section latest-recipes p-150">
        <div className="container">
          <h2 className="heading">Latest Recipes</h2>
          <div className="latest-recipes-list recipes-list">
            {sortedList.map((recipe) => (
              <Recipe
                recipe={recipe}
                key={recipe.id}
                showLikes={false}
                showRating={true}
              />
            ))}
          </div>
          <button className="btn btn-primary">View More</button>
        </div>
      </section>
    </>
  );
}
