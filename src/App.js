import React, { useState } from "react";
import repetitionExercise from "./components/repetitionExercise";
import durationExercise from "./components/durationExercise";

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const exercises = [
  { name: "Push Ups", type: "repetition" },
  { name: "Runnning", type: "duration" },
  { name: "Plank", type: "duration" },
  ];

  let screen = {
    <div>
      <h1>Exercise Menu</h1>

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
  };

    if(selectedExercise) {
      if (selectedExercise.type === "repetition") {
        screen = (
          <repetitionExercise name={selectedExercise.name} />
        );
      } else if (selectedExercise.type === "duration") {
        screen = (
          <durationExercise name={selectedExercise.name} />
        );
      }
    }

    return <div>{screen}</div>
  }

  export default App;