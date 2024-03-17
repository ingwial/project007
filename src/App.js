import { useState } from "react";
import "./App.css";
import ResultList from "./ResultList";

function App() {
  const [operations, setOperations] = useState([]);

  function sumUp(event) {
    event.preventDefault();
    const v1 = Number(event.target.value1.value);
    const v2 = Number(event.target.value2.value);
    const total = v1 + v2;
    const newObject = {
      result: total,
      value1: v1,
      value2: v2,
    };

    setOperations([newObject, ...operations]);

    event.target.value1.value = "";
    event.target.value2.value = "";
  }

  return (
    <div>
      <form onSubmit={sumUp}>
        <label>Enter first value</label>
        <input type="number" name="value1" />
        <label>Enter second value</label>
        <input type="number" name="value2" />
        <button type="submit">Sum Up</button>
      </form>
      <ResultList results={operations}></ResultList>
    </div>
  );
}

export default App;
