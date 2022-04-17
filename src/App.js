import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Provider from "./provider";
import { Routing } from "./router";

function App() {
  return (
    <React.Fragment>
      <Provider>
        <Router>
          <Routes>
            {Routing.map((restProp) => (
              <Route {...restProp} />
            ))}
          </Routes>
        </Router>
      </Provider>
    </React.Fragment>
  );
}

export default App;
