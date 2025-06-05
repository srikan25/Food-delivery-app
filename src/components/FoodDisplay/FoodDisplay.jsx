import { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ selectedCategory }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map(
          ({ _id, name, description, image, price, category }, index) => {
            if (selectedCategory === "All" || selectedCategory === category) {
              return (
                <FoodItem
                  key={index}
                  id={_id}
                  name={name}
                  description={description}
                  image={image}
                  price={price}
                />
              );
            }
          }
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
