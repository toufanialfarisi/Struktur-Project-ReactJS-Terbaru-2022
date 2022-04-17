import React from "react";
import { useNavigate } from "react-router-dom";
import { Nav } from "../../router";

function SecondPage() {
  const navigate = useNavigate();
  return (
    <h1>
      This is second page <br />
      <button onClick={() => navigate(Nav.home)}>Back</button>
    </h1>
  );
}

export default SecondPage;
