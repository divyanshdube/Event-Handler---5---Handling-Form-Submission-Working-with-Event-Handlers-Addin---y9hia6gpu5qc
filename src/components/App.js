import React from "react";
import "../styles/App.css";
const App = () => {
  function onSubmitHandler(e) {
    e.preventDefault();
    console.log("form submitted");
  }

  return (
    <div id="main">
      <form>
        <label htmlFor="name">Name</label>
        <input id="name" type={"text"} />

        <br />
        <br />
        <button type="submit" onClick={onSubmitHandler}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
