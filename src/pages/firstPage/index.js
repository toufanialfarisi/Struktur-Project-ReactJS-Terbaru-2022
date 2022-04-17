import React from "react";
import { useNavigate } from "react-router-dom";
function FirstPage() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <h1>This is Next Page</h1> <br />{" "}
      <button onClick={() => navigate("/second-page")}>Next second page</button>
    </React.Fragment>
  );
}

export default FirstPage;
