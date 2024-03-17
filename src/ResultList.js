import React from "react";

function ResultList(props) {
  return (
    <ul>
      {props.results.map((element) => (
        <li>
          Sum Up of {element.value1} and {element.value2} is {element.result}
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
