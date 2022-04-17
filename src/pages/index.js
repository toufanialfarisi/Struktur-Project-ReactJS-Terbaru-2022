import React from "react";
import { reducer, initialState } from "../reducer";
import { useNavigate } from "react-router-dom";
import * as API from "../api";

function Index(props) {
  /**navigation */
  const navigate = useNavigate();

  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    /**get one data */
    API.getData(dispatch, 8);

    /**get all data */
    API.getAllData(dispatch);
  }, []);

  return (
    <React.Fragment>
      <h1>ROUTING PAGE</h1>
      <button onClick={() => navigate("/first-page")}>Next Page</button>
      <br />
      <h1>GET ONE DATA</h1>
      {state.loading ? "loading" : JSON.stringify(state.post)}

      <br />
      <h1>GET ALL DATA</h1>
      {state.loading ? "loading all data" : JSON.stringify(state.posts)}
    </React.Fragment>
  );
}

export default Index;
