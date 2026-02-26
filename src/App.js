import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import "./App.css";

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const exercises = [
  { name: "Push Ups", type: "repetition" },
  { name: "Crunches", type: "repetition" },
  { name: "Running", type: "duration" },
  { name: "Plank", type: "duration" },
  { name: "Wall Sit", type: "duration" },
  ];

  let screen = (
    <div className="menu">
      <h1>Exercise Menu</h1>
      <p>Select an Exercise:</p>

      <div className="menuButtons">
        {exercises.map((exercise, index) => (
          <button
          key={index}
          onClick={() => setSelectedExercise(exercise)}
          style={{ margin: "5px" }}
          >
            {exercise.name}
          </button>
      ))}
      </div>
    </div>
  );

    if(selectedExercise) {
      if (selectedExercise.type === "repetition") {
        screen = (
          <RepetitionExercise name={selectedExercise.name} />
        );
      } else if (selectedExercise.type === "duration") {
        screen = (
          <DurationExercise name={selectedExercise.name} />
        );
      }
    }

    return <div>{screen}</div>
  }

  export default App;