import axios from "axios";
import { FETCH_SUCCESS, GET_ALL_POST } from "../constant";

const getData = async (dispatch, id) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((res) => dispatch({ type: FETCH_SUCCESS, payload: res.data }));
};

const getAllData = async (dispatch) => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((res) => dispatch({ type: GET_ALL_POST, payload: res.data }));
};

export { getData, getAllData };
