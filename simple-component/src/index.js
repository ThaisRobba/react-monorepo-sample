import React from "react";

const App = () => {
  return (
    <div>
      <h1>Simple Component woot woot</h1>
      <p>{process.env.SOME_URL}</p>
    </div>
  );
};

export default App;
