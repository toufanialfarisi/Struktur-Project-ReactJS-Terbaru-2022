import React from "react";
import { useNavigate } from "react-router-dom";
import { useProvider } from "../../provider";
import { Nav } from "../../router";

function SecondPage() {
  const navigate = useNavigate();
  const { state } = useProvider();
  return (
    <>
      <h1>
        This is second page <br />
      </h1>
      <button onClick={() => navigate(Nav.home)}>Back</button>
      <h1>GET ALL DATA</h1>
      {state.loading ? "loading all data" : JSON.stringify(state.posts)}
    </>
  );
}

export default SecondPage;
