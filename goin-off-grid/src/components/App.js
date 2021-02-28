import React from "react";
import Header from "./Header";
import HikeControl from "./HikeControl";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <HikeControl />
      </div>
    </React.Fragment>
  );
}

export default App;
