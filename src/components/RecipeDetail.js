import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";
import Author from "../images/author.jpg";
import { AiOutlineUser, AiFillHeart } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import CarouselRecipe from "./CarouselRecipe";

const RecipeDetailPage = () => {
  const { id } = useParams();
  const { recipeList, currentRecipe } = useContext(GlobalContext);
  const navigate = useNavigate();

  // Find the recipe with the specified id
  const recipe = recipeList.find((recipe) => recipe.id === parseInt(id));
  const starIcon = <FaStar color="#fc9400" />;
  const starEmptyIcon = <FaStar color="#e5e5e5" />;
  const userIcon = <AiOutlineUser />;
  const clockIcon = <BiTime />;
  const heartIcon = <AiFillHeart />;

  const handleBackClick = () => {
    navigate("/");
  };

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <>
      <section className="section recipe-inner-banner">
        <div className="container">
          <div className="recipe-post recipe-post-header">
            <div className="recipe-post-img">
              <img src={recipe.image} alt={recipe.title} />
            </div>
            <div className="recipe-post-content">
              <h1>{recipe.title}</h1>
              <div className="recipe-post-content-header">
                <div className="author">
                  <img src={Author} alt="Trisa Albert" />
                  <p>Mia Thompson</p>
                </div>
                <div className="d-flex">
                  <div className="likes">
                    <span className="label">{recipe.likes}</span>
                    {heartIcon}
                  </div>
                  <div className="rating">
                    <span className="label">{recipe.rating}</span>
                    <Rating
                      name="read-only"
                      initialRating={recipe.rating}
                      fullSymbol={starIcon}
                      emptySymbol={starEmptyIcon}
                      readonly={true}
                    />
                  </div>
                </div>
              </div>

              <div className="recipe-post-content-summary">
                {recipe.summary}
              </div>
              <div className="recipe-post-content-detail">
                <div>
                  <span>{clockIcon}</span> Prep Time: {recipe.readyInMinutes}{" "}
                  mins
                </div>
                <div>
                  <span>{userIcon}</span> Serving: {recipe.servings} people
                </div>
              </div>
            </div>
          </div>
          <div className="recipe-post recipe-post-body">
            <div className="recipe-post-instruction">
              <h4>Instruction</h4>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </li>
                <li>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </li>
                <li>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </li>
              </ul>
            </div>
            <div className="recipe-post-ingredient">
              <h4>Ingredient</h4>
              <ul>
                <li>1 (16 ounce) Italian-style salad dressing</li>
                <li>1 teaspoon garlic powder</li>
                <li>1 teaspoon salt</li>
                <li>4 skinless, boneless chicken breast halves</li>
              </ul>
            </div>
          </div>
          {/* <p>{recipe.instruction}</p> */}
          <button className="btn btn-primary" onClick={handleBackClick}>
            Back
          </button>
        </div>
      </section>
      <section className="section recipe-slider p-150">
        <div className="container">
          <CarouselRecipe currentRecipe={recipe} />
        </div>
      </section>
    </>
  );
};

export default RecipeDetailPage;
