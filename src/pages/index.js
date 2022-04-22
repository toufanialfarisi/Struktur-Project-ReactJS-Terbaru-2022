import React from "react";
import { useNavigate } from "react-router-dom";
import * as API from "../api";
import { Nav } from "../router";
import { useProvider } from "../provider";
import { GET_FORM_TEXT } from "../constant";

function Index(props) {
  /**navigation */
  const navigate = useNavigate();

  const { state, dispatch } = useProvider();

  React.useEffect(() => {
    /**get one data */
    API.getData(dispatch, 8);

    /**get all data */
    API.getAllData(dispatch);
  }, [dispatch]);

  const handleChangeText = (e) => {
    const { value, name } = e.target;
    dispatch({ type: GET_FORM_TEXT, [name]: value });
  };

  return (
    <React.Fragment>
      <h1>INPUT FORM</h1>
      <input type="text" name="formData" onChange={handleChangeText} />
      <h3>{JSON.stringify(state.form)}</h3>
      <h1>ROUTING PAGE</h1>
      <button onClick={() => navigate(Nav.firstPage)}>Next Page</button>
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
