import { Link, useLocation } from "react-router-dom";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { AiFillHeart } from "react-icons/ai";

export default function Recipe({ recipe, showLikes, showRating }) {
  const starIcon = <FaStar color="#fc9400" />;
  const starEmptyIcon = <FaStar color="#e5e5e5" />;
  const heartIcon = <AiFillHeart />;

  const { recipeList } = useContext(GlobalContext);

  return (
    <Link className="recipe-card" to={`/recipe/${recipe.id}`}>
      <div className="recipe-card-img">
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <div className="recipe-card-content">
        <div>
          <div className="line"></div>
          <h4 title={recipe.title}>
            {recipe.title.length > 20
              ? recipe.title.substring(0, 20) + "..."
              : recipe.title}
          </h4>
        </div>
        {/* <div className="flex">
          <div>
            <span className="label">Serving</span>
            <span className="value">{recipe.servings}</span>
          </div>
          <div>
            <span className="label">Time</span>
            <span className="value">{recipe.readyInMinutes}</span>
          </div>
        </div> */}

        {showLikes && (
          <div className="likes">
            {heartIcon}
            <span className="label">{recipe.likes}</span>
          </div>
        )}
        {showRating && (
          <div className="rating">
            <Rating
              name="read-only"
              initialRating={recipe.rating}
              fullSymbol={starIcon}
              emptySymbol={starEmptyIcon}
              readonly={true}
            />
          </div>
        )}
      </div>
    </Link>
  );
}
