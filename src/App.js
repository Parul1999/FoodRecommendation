import "./styles.css";
import { useState } from "react";

export default function App() {
  var allFoods = {
    "North Indian": [
      {
        name: "Rajma Chawal",
        description:
          "Rajma is high in proteins and with rice it becomes the favourite dish for most people.",
        rating: "5/5"
      },
      {
        name: "Palak Paneer",
        description:
          "It includes a green leafy vegetable , so is high in iron.",
        rating: "4/5"
      },
      {
        name: "Shahi Paneer",
        description:
          "It is cooked in many different ways and is equivalent to chicken for veg-people.",
        rating: "4/5"
      }
    ],
    "South Indian": [
      {
        name: "Masala Dosa",
        description:
          "It comes in different tastes and is majorly made up of Rice or Rawa",
        rating: "5/5"
      },
      {
        name: "Idli",
        description:
          "Idli is made from rice and lentil batter and tastes good with sambhar.",
        rating: "4.5/5"
      },
      {
        name: "Uttpam",
        description:
          "Uttpam is made with lentils, rice, onions, herbs & spices.It is a common breakfast in South India.",
        rating: "4/5"
      }
    ],
    Chinese: [
      {
        name: "Spring Roll",
        description: "It is used as a snack and comes in different varities.",
        rating: "5/5"
      },
      {
        name: "Quick Noodles",
        description: "These are a great help in midnight cravings.",
        rating: "3.5/5"
      },
      {
        name: "Fried Rice",
        description:
          "It's rice that is loaded with veggies and is fried as the name suggests.",
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
              <div style={{ paddingBottom: "0.4rem" }}>
                {" "}
                {item.description}{" "}
              </div>
              <div> {item.rating} </div>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
