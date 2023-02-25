import "./App.css";
import { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import LoopExerciseHome from "./components/LoopExercise";

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const ExerciseSelection = (exercise) => {
    setSelectedExercise(exercise);
  };
  const Return = () => setSelectedExercise(null);

  return (
    <div className="App">
      {selectedExercise ? (
        selectedExercise.type === "repetition" ? (
          <RepetitionExercise exercise={selectedExercise} onReturn={Return} />
        ) : selectedExercise.type === "duration" ? (
          <DurationExercise exercise={selectedExercise} onReturn={Return} />
        ) : (
          <LoopExerciseHome exercise={selectedExercise} onReturn={Return} />
        )
      ) : (
        <div className="menu">
          <h1> Exercise Tracker</h1>
          <h3>Select an Exercise:</h3>
          <button
            onClick={() =>
              ExerciseSelection({ name: "Sun Salutations", type: "loop" })
            }
          >
            Sun Salutations
          </button>
          <button
            onClick={() =>
              ExerciseSelection({ name: "Push Ups", type: "repetition" })
            }
          >
            Push Ups
          </button>
          <button
            onClick={() =>
              ExerciseSelection({ name: "Running", type: "duration" })
            }
          >
            Running
          </button>
          <button
            onClick={() =>
              ExerciseSelection({ name: "Plank", type: "duration" })
            }
          >
            Plank
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
