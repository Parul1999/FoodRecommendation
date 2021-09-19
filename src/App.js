import "./styles.css";
import { useState } from "react";

export default function App() {
   var allFoods = {
    "North Indian": [
      {
        name: "Rajma Chawal",
        rating: "5/5"
      },
      {
        name: "Palak Paneer",
        rating: "4/5"
      },
      {
        name: "Shahi Paneer",
        rating: "4/5"
      }
    ],
    "South Indian": [
      {
        name: "Masala Dosa",
        rating: "5/5"
      },
      {
        name: "Idli",
        rating: "4.5/5"
      },
      {
        name: "Uttpam",
        rating: "4/5"
      }
    ],
    Chinese: [
      {
        name: "Spring Roll",
        rating: "5/5"
      },
      {
        name: "Quick Noodles",
        rating: "3.5/5"
      },
      {
        name: "Fried Rice",
        rating: "4/5"
      }
    ]
  };
  const [currentCuisine, setCurrentCuisine] = useState("North Indian");

  function cusineClick(e) {
    setCurrentCuisine(e.target.value);
  }

  var allCusine = Object.keys(allFoods);
  return (
    <div className="App">
      <h1>🍽 Food Recommendations </h1>
      <p>Checkout my favorite cuisines. Select a cuisine to get started</p>
      {allCusine.map((item) => {
        return (
          <button
            style={
              item === currentCuisine
                ? { backgroundColor: "rebeccapurple", color: "white" }
                : {}
            }
            value={item}
            key={item}
            onClick={(e) => cusineClick(e)}
          >
            {item}
          </button>
        );
      })}
      <hr />
      {allFoods[currentCuisine].map((item) => {
        return (
          <ul key={item.name}>
            <li>
              <div style={{ paddingBottom: "0.4rem" }}> {item.name} </div>
              <div> {item.rating} </div>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
