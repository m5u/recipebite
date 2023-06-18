import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";

export default function RecipeOfWeek() {
  const { recipeList } = useContext(GlobalContext);

  // Randomly select one recipe as the Recipe of the Week
  const recipeOfTheWeek =
    recipeList[Math.floor(Math.random() * recipeList.length)];
  return (
    <>
      <section className="section recipe-weekly">
        <div className="container">
          <div className="d-flex">
            <div className="recipe-weekly-img">
              <img src={recipeOfTheWeek.image} alt={recipeOfTheWeek.title} />
            </div>
            <div className="recipe-weekly-content">
              <div className="sub-heading">Pick of the Week</div>
              <h2 className="heading">{recipeOfTheWeek.title}</h2>
              <p>{recipeOfTheWeek.summary}</p>
              <Link to={`recipe/${recipeOfTheWeek.id}`}>
                <button className="btn btn-primary">View Recipe</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
