import React from "react";
import { useNavigate } from "react-router-dom";
import { Nav } from "../../router";

function FirstPage() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <h1>This is Next Page</h1> <br />{" "}
      <button onClick={() => navigate(Nav.secondPage)}>Next second page</button>
    </React.Fragment>
  );
}

export default FirstPage;
