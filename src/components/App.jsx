import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setOfItems] = useState([]);

  function theChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  function added() {
    setOfItems((prevValue) => {
      return [...prevValue, inputText];
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={theChange} type="text" value={inputText} />
        <button onClick={added}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItems) => {
            return <li>{todoItems}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
