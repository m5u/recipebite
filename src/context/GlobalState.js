import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

import API from "./API";

const initialState = {
  recipeList: API,
  searchResult: API,
  veganCheck: false,
  glutenFreeCheck: false,
  dairyFreeCheck: false,
  cuisineCheck: [],
  dishTypeCheck: [],
};
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const loadRecipeList = (recipes) => {
    dispatch({
      type: "SET_RECIPE_LIST",
      payload: recipes,
      isLoading: false,
    });
  };

  const searchRecipe = (text) => {
    //debugger;
    dispatch({
      type: "SET_SEARCH_RESULTS",
      payload: text,
    });
  };

  const clearRecipe = () => {
    dispatch({
      type: "SET_SEARCH_CLEAR",
    });
  };

  const filterRecipes = (cuisine) => {
    debugger;
    dispatch({
      type: "SET_FILTER_RECIPE",
      payload: cuisine,
    });
  };

  const setVeganCheck = (vegan) => {
    debugger;
    dispatch({
      type: "SET_IS_VEGAN_CHECK",
      payload: vegan,
    });
  };
  const setGlutenFreeCheck = (glutenFree) => {
    dispatch({
      type: "SET_IS_GLUTENFREE_CHECK",
      payload: glutenFree,
    });
  };
  const setDairyFreeCheck = (dairyFree) => {
    dispatch({
      type: "SET_IS_DIARYFREE_CHECK",
      payload: dairyFree,
    });
  };

  const setCuisineCheck = (cuisine) => {
    debugger;
    dispatch({
      type: "SET_IS_CUISINE_CHECK",
      payload: cuisine,
    });
  };

  const setDishTypeCheck = (dishType) => {
    dispatch({
      type: "SET_IS_DISHTYPE_CHECK",
      payload: dishType,
    });
  };

  const resetFilter = () => {
    dispatch({
      type: "SET_RESET_FILTER",
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        recipeList: state.recipeList,
        searchResult: state.searchResult,
        veganCheck: state.veganCheck,
        glutenFreeCheck: state.glutenFreeCheck,
        dairyFreeCheck: state.dairyFreeCheck,
        cuisineCheck: state.cuisineCheck,
        dishTypeCheck: state.dishTypeCheck,

        searchRecipe,
        clearRecipe,
        loadRecipeList,
        filterRecipes,
        setVeganCheck,
        setGlutenFreeCheck,
        setDairyFreeCheck,
        setCuisineCheck,
        setDishTypeCheck,
        resetFilter,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
