import { useState } from "react";

const RepetitionExercise = ({ exercise, onReturn }) => {
  const [repetitions, setRepetitions] = useState(0);

  return (
    <div>
      <h2>{exercise.name}</h2>
      <h3>Repetitions:</h3>
      <div id="tracker">
        <p>{repetitions}</p>
      </div>
      <button onClick={() => setRepetitions(repetitions + 1)}>Add Rep</button>
      <button onClick={() => setRepetitions(0)}>Reset</button>
      <button onClick={onReturn}>Menu</button>
    </div>
  );
};

export default RepetitionExercise;
