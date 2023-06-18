import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function FilterRecipe() {
  debugger;
  const {
    recipeList,
    filterRecipes,
    resetFilter,
    veganCheck,
    setVeganCheck,
    glutenFreeCheck,
    setGlutenFreeCheck,
    dairyFreeCheck,
    setDairyFreeCheck,
    cuisineCheck,
    setCuisineCheck,
    dishTypeCheck,
    setDishTypeCheck,
  } = useContext(GlobalContext);

  const cuisineType = [...new Set(recipeList.map((recipe) => recipe.cuisine))]; // removes duplicate values by set and create new array of cuisine

  const allDishTypes = [].concat(
    ...recipeList.map((recipe) => recipe.dishType)
  );
  const dishType = [...new Set(allDishTypes)];

  // const [selectedCuisine, setSelectedCuisine] = useState("");
  const [selectedDishType, setSelectedDishType] = useState("");

  const handleCuisineChange = (e) => {
    debugger;
    const { value, checked } = e.target;
    // setCuisineCheck((prevCuisine) => {
    //   if (checked) {
    //     return [...prevCuisine, value];
    //   } else {
    //     return prevCuisine.filter((c) => c !== value);
    //   }
    // });
    if (checked) {
      setCuisineCheck([...cuisineCheck, value]);
    } else {
      setCuisineCheck(cuisineCheck.filter((c) => c !== value));
    }
  };

  const handleDishTypeChange = (e) => {
    //debugger;
    const { value, checked } = e.target;
    // setSelectedDishType((prevDishType) => {
    //   if (checked) {
    //     return [...prevDishType, value];
    //   } else {
    //     return prevDishType.filter((d) => d !== value);
    //   }
    // });
    if (checked) {
      setDishTypeCheck([...dishTypeCheck, value]);
    } else {
      setDishTypeCheck(dishTypeCheck.filter((c) => c !== value));
    }
  };
  const handleVeganChange = (e) => {
    setVeganCheck(e.target.checked);
  };

  const handleGlutenFreeChange = (e) => {
    setGlutenFreeCheck(e.target.checked);
  };

  const handleDiaryFreeChange = (e) => {
    debugger;
    setDairyFreeCheck(e.target.checked);
  };

  const handleFilter = () => {
    debugger;
    const fitlerRecipeByCategory = {
      cuisine: cuisineCheck,
      vegan: veganCheck,
      glutenFree: glutenFreeCheck,
      dairyFree: dairyFreeCheck,
      dishType: dishTypeCheck,
    };
    filterRecipes(fitlerRecipeByCategory);
  };

  const handleResetFilter = () => {
    debugger;
    resetFilter();
    setCuisineCheck([]);
    setVeganCheck(false);
    setDairyFreeCheck(false);
    setGlutenFreeCheck(false);
    setDishTypeCheck([]);
  };

  return (
    <div className="recipe-filter">
      <div className="category cuisine">
        <span className="header">Cuisine</span>
        <div className="cuisine-list list list-input">
          {cuisineType.map((cuisine, index) => (
            <div key={`${cuisine}-${index}`}>
              <input
                type="checkbox"
                id={`checkbox-${cuisine}`}
                value={cuisine}
                checked={cuisineCheck.includes(cuisine)}
                onChange={handleCuisineChange}
              />
              <label htmlFor={`checkbox-${cuisine}`}>{cuisine}</label>
            </div>
          ))}
        </div>
        <div className="category dish-type">
          <span className="header">Meals</span>
          <div className="dish-type-list list list-input">
            {dishType.map((dishType, index) => (
              <div key={`${dishType}-${index}`}>
                <input
                  type="checkbox"
                  id={`checkbox-${dishType}`}
                  value={dishType}
                  checked={dishTypeCheck.includes(dishType)}
                  onChange={handleDishTypeChange}
                />
                <label htmlFor={`checkbox-${dishType}`}>{dishType}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="category dietary">
        <span className="header">Dietary</span>
        <div className="dietary-list list list-input">
          <div>
            <input
              type="checkbox"
              checked={veganCheck}
              onChange={handleVeganChange}
            />
            <label htmlFor="vegan">Vegan</label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={glutenFreeCheck}
              onChange={handleGlutenFreeChange}
            />
            <label htmlFor="glutenFree">Gluten Free</label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={dairyFreeCheck}
              onChange={handleDiaryFreeChange}
            />
            <label htmlFor="diaryFree">Diary Free</label>
          </div>
        </div>
      </div>

      <div className="btn-wrapper">
        <button className="btn btn-primary" onClick={handleFilter}>
          Filter
        </button>
        <button className="btn btn-secondary" onClick={handleResetFilter}>
          Reset
        </button>
      </div>
    </div>
  );
}
