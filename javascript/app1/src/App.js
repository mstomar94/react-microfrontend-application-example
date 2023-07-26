import React from "react";

const App = (props) => {
  console.log("props", props);
  return (
    <div className="child-component">
      <h1>Child App</h1>
    </div>
  );
};

export default App;
