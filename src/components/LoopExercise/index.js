import { useState } from "react";

const LoopExerciseHome = ({ exercise, onReturn }) => {
  const personalRecord = parseInt(localStorage.getItem("personalRecord"));
  if (isNaN(personalRecord)) {
    localStorage.setItem("personalRecord", 0);
  }

  const [count, setCount] = useState(0);
  const [cycle, setCycle] = useState(false);
  const [finish, setFinish] = useState(false);

  const handleStart = () => {
    setCycle(true);
  };
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleFinish = () => {
    setFinish(true);
  };

  const handlePR = () => {
    localStorage.setItem("personalRecord", count);
    handleReset();
  };
  const handleReset = () => {
    setCount(0);
    setCycle(false);
    setFinish(false);
  };
  const resetPR = () => {
    localStorage.setItem("personalRecord", 0);
    onReturn();
  };

  const FinishExercise = () => {
    if (count > personalRecord) {
      return (
        <div>
          <h2>{exercise.name}</h2>
          <h3 class="end">New Record!</h3>
          <h3>You Completed:</h3>
          <div class="tracker">
            <p>{count}</p>
          </div>
          <button onClick={handlePR}>Save</button>
          <button id="delete" onClick={handleReset}>
            Delete
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <h2>{exercise.name}</h2>
          <h3 class="end">Workout Ended</h3>
          <h3>You Completed:</h3>
          <div class="tracker" id="noPR" color="gray">
            <p>{count}</p>
          </div>
          <button onClick={handleReset}>End</button>
        </div>
      );
    }
  };

  const LoopExercise = () => {
    return (
      <div>
        <h2>{exercise.name}</h2>
        <h3>Cycles:</h3>
        <div class="tracker">
          <p>{count}</p>
        </div>
        <button onClick={handleIncrement}>Complete Cycle</button>
        <button onClick={handleFinish}>Finish</button>
      </div>
    );
  };

  return (
    <div>
      {cycle ? (
        finish ? (
          <FinishExercise />
        ) : (
          <LoopExercise />
        )
      ) : (
        <div>
          <h2>{exercise.name}</h2>
          <h3>Personal Record:</h3>
          <div class="tracker">
            <p>{personalRecord}</p>
          </div>
          <button onClick={handleStart}>Start</button>
          <button onClick={resetPR}>Reset</button>
          <button onClick={onReturn}>Menu</button>
        </div>
      )}
    </div>
  );
};

export default LoopExerciseHome;
