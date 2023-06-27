import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import "./css/main.css";
import Home from "./pages/Home";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import { useEffect } from "react";
import RecipesPage from "./pages/RecipesPage";
import AboutPage from "./pages/AboutPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetailPage />} />

          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
