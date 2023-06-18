//The reduceer - this is used to update the state, based on the action
const AppReducer = (state, action) => {
  debugger;
  switch (action.type) {
    case "SET_RECIPE_LIST":
      return {
        ...state,
        // loading: false,
        recipeList: action.payload,
      };
    case "SET_SEARCH_RESULTS":
      debugger;
      const filteredRecipes = state.recipeList.filter((recipe) =>
        recipe.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        searchResult: filteredRecipes,
      };

    case "SET_SEARCH_CLEAR":
      return {
        ...state,
        searchResult: [],
      };

    case "SET_FILTER_RECIPE":
      debugger;
      const fitlerRecipeByCategory = action.payload;
      let filteredItems = state.recipeList;
      if (
        fitlerRecipeByCategory.cuisine &&
        fitlerRecipeByCategory.cuisine.length > 0
      ) {
        filteredItems = filteredItems.filter((recipe) =>
          fitlerRecipeByCategory.cuisine.some((c) => recipe.cuisine.includes(c))
        );
      }
      if (fitlerRecipeByCategory.vegan) {
        filteredItems = filteredItems.filter(
          (recipe) => recipe.vegan === "true"
        );
      }
      if (fitlerRecipeByCategory.glutenFree) {
        filteredItems = filteredItems.filter(
          (recipe) => recipe.glutenFree === "true"
        );
      }
      if (fitlerRecipeByCategory.dairyFree) {
        filteredItems = filteredItems.filter(
          (recipe) => recipe.dairyFree === "true"
        );
      }
      if (
        fitlerRecipeByCategory.dishType &&
        fitlerRecipeByCategory.dishType.length > 0
      ) {
        filteredItems = filteredItems.filter((recipe) =>
          fitlerRecipeByCategory.dishType.some((d) =>
            recipe.dishType.includes(d)
          )
        );
      }
      return {
        ...state,
        searchResult: filteredItems,
      };

    case "SET_RESET_FILTER":
      debugger;
      return {
        ...state,
        searchResult: state.recipeList,
      };

    case "SET_IS_VEGAN_CHECK":
      return {
        ...state,
        veganCheck: action.payload,
      };
    case "SET_IS_GLUTENFREE_CHECK":
      return {
        ...state,
        glutenFreeCheck: action.payload,
      };
    case "SET_IS_DIARYFREE_CHECK":
      return {
        ...state,
        dairyFreeCheck: action.payload,
      };
    case "SET_IS_CUISINE_CHECK":
      return {
        ...state,
        cuisineCheck: action.payload,
      };
    case "SET_IS_DISHTYPE_CHECK":
      return {
        ...state,
        dishTypeCheck: action.payload,
      };

    default:
      return state;
  }
};

export default AppReducer;
