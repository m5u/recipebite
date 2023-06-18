import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { BiFilter } from "react-icons/bi";
import FilterRecipe from "./FilterRecipe";
import { BiSearch } from "react-icons/bi";

export default function SearchRecipe() {
  const { searchRecipe, clearRecipe } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [showFilter, setShowFilter] = useState("");

  useEffect(() => {
    debugger;
    searchRecipe(text);
  }, [text]);

  const handleClearSearch = (e) => {
    if (e.keycode === 8 && text === "") {
      searchRecipe("");
    } else {
      clearRecipe();
    }
  };

  const handleToggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <>
      <div className="recipe-search-wrap">
        <div className="recipe-search">
          <form>
            <input
              type="text"
              placeholder="Search Here..."
              onKeyDown={handleClearSearch}
              onChange={(e) => setText(e.target.value)}
              value={text}
              // onChange={handleText}
            />
            <span className="icon-search">
              <BiSearch />
            </span>
          </form>
          <span
            className={showFilter ? "icon-filter active" : "icon-filter"}
            onClick={handleToggleFilter}
          >
            <BiFilter />
          </span>
        </div>
        {showFilter && <FilterRecipe />}
      </div>
    </>
  );
}
