import RecipeList from "../components/RecipeList";
import SearchRecipe from "../components/SearchRecipe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import RecipeOfWeek from "../components/RecipeOfWeek";
import Footer from "../components/Footer";
import LatestRecipes from "../components/LatestRecipes";
import MostLikedRecipes from "../components/MostLikedRecipes";

export default function Home() {
  return (
    <>
      {/* <SearchRecipe /> */}
      <Header />
      <Hero />
      <Categories />
      <MostLikedRecipes />
      <RecipeOfWeek />
      <LatestRecipes />
      <Footer />
      {/* <RecipeList /> */}
    </>
  );
}
