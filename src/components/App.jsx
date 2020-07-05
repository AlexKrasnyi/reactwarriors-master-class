import React from "react";

function MovieItem(props) {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.rating}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <MovieItem title="Title new" rating={9.8} />
    </div>
  );
}

export default App;
