import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Routing } from "./router";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          {Routing.map((restProp) => (
            <Route {...restProp} />
          ))}
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
