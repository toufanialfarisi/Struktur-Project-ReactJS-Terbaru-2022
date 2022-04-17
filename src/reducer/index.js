import { FETCH_SUCCESS, FETCH_FAILED, GET_ALL_POST } from "../constant";

const initialState = {
  loading: true,
  post: {},
  posts: [],
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        post: action.payload,
        error: "",
      };
    case FETCH_FAILED:
      return {
        ...state,
        loading: false,
        post: {},
        error: "terjadi kesalahan",
      };
    case GET_ALL_POST:
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: "",
      };
    default:
      return state;
  }
};
export { initialState, reducer };
