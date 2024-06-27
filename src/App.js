import { useState } from "react";

function App() {
  const [steps, setSteps] = useState(0);
  const [count, setCount] = useState(0);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDate = new Date();
  // console.log(currentDate);
  const updatedDate = new Date(currentDate);
  updatedDate.setDate(updatedDate.getDate() + count);
  // console.log(updatedDate.getDate());
  // let date = new Date().toLocaleDateString();
  // let day = new Date().getDay();
  // const date = new Date("june 21 2023");
  // date.setDate(date.getDate() + count);
  function stepDecrease() {
    setSteps((step) => step - 1);
  }

  function stepIncrease() {
    setSteps((step) => step + 1);
  }
  function countIncrease() {
    setCount((c) => c + steps);
  }
  function countDecrease() {
    setCount((c) => c - steps);
  }

  return (
    <div className="App">
      <h1>React App</h1>
      <button onClick={stepDecrease}>-</button>
      <span>step : {steps}</span>
      <button onClick={stepIncrease}>+</button>
      <br />
      <button onClick={countDecrease}>-</button>
      <span>count : {count}</span>
      <button onClick={countIncrease}>+</button>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was`}
        </span>
        <span> {updatedDate.toDateString()}</span>
      </p>
    </div>
  );
}

export default App;
