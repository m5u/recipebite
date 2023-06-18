import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import BreakfastImg from "../images/breakfast.jpg";
import LunchImg from "../images/main-course.jpg";
import DrinkImg from "../images/drinks.jpeg";
import DessertImg from "../images/dessert.jpeg";
import { Link } from "react-router-dom";

export default function Categories() {
  debugger;
  const { recipeList } = useContext(GlobalContext);

  return (
    <>
      <section className="section categories">
        <div className="container">
          <h2 className="heading">Popular Categories</h2>

          <div className="category-list">
            <Link
              className="category"
              to={`/recipes`}
              state={{ dishType: "breakfast" }}
            >
              <div className="image">
                <img src={BreakfastImg} alt="breakfast" />
              </div>
              <div className="line"></div>
              <h3>Breakfast</h3>
            </Link>
            <Link
              className="category"
              to={`/recipes`}
              state={{ dishType: "lunch" }}
            >
              <div className="image">
                <img src={LunchImg} alt="Lunch" />
              </div>
              <div className="line"></div>
              <h3>Lunch</h3>
            </Link>
            <Link
              className="category"
              to={`/recipes`}
              state={{ dishType: "drink" }}
            >
              <div className="image">
                <img src={DrinkImg} alt="Drink" />
              </div>
              <div className="line"></div>
              <h3>Drink</h3>
            </Link>
            <Link
              className="category"
              to={`/recipes`}
              state={{ dishType: "dessert" }}
            >
              <div className="image">
                <img src={DessertImg} alt="Dessert" />
              </div>
              <div className="line"></div>
              <h3>Dessert</h3>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
