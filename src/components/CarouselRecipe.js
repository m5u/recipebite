import React, { useContext, useState } from "react";
import ItemsCarousel from "react-items-carousel";
import { GlobalContext } from "../context/GlobalState";
import Recipe from "./Recipe";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

export default function CarouselRecipe({ currentRecipe }) {
  debugger;
  const { recipeList } = useContext(GlobalContext);
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const right = <BiChevronRight />;
  const left = <BiChevronLeft />;

  const recommendedList = recipeList
    .filter((recipe) => recipe.cuisine === currentRecipe.cuisine)
    .slice(0, 6);

  let numberOfCards = 3;
  // Adjust number of cards based on screen width
  if (window.innerWidth <= 780) {
    numberOfCards = 2;
  }
  if (window.innerWidth <= 520) {
    numberOfCards = 1;
  }
  return (
    <>
      <h2 className="heading">Latest Recipes</h2>
      <div className="slider">
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={numberOfCards}
          gutter={16}
          alwaysShowChevrons={true}
          leftChevron={<button className="arrow left">{left}</button>}
          rightChevron={<button className="arrow right">{right}</button>}
        >
          {recommendedList.map((recipe) => (
            <Recipe key={recipe.id} recipe={recipe} />
          ))}
        </ItemsCarousel>
      </div>
    </>
  );
}
