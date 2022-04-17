import axios from "axios";
import { FETCH_SUCCESS, GET_ALL_POST, BASE_URL } from "../constant";

const getData = async (dispatch, id) => {
  axios
    .get(`${BASE_URL}/${id}`)
    .then((res) => dispatch({ type: FETCH_SUCCESS, payload: res.data }));
};

const getAllData = async (dispatch) => {
  axios
    .get(`${BASE_URL}`)
    .then((res) => dispatch({ type: GET_ALL_POST, payload: res.data }));
};

export { getData, getAllData };
