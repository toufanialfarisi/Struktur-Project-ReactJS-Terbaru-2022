import {
  FETCH_SUCCESS,
  FETCH_FAILED,
  GET_ALL_POST,
  GET_FORM_TEXT,
} from "../constant";

const initialState = {
  loading: true,
  post: {},
  posts: [],
  error: "",
  form: {
    name: "",
  },
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
    case GET_FORM_TEXT:
      return {
        ...state,
        form: {
          name: action.formData,
        },
      };
    default:
      return state;
  }
};
export { initialState, reducer };
