import React from "react";
import { useNavigate } from "react-router-dom";
function SecondPage() {
  const navigate = useNavigate();
  return (
    <h1>
      This is second page <br />
      <button onClick={() => navigate("/")}>Back</button>
    </h1>
  );
}

export default SecondPage;
