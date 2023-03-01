import axios from "axios";
import { useEffect, useReducer } from "react";

const DataFetchingWithUseReducer = () => {
  const initialState = {
    loading: true,
    error: null,
    post: {}
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "SUCCESS":
        return { ...state, loading: false, post: action.payload, error: null };
      case "ERROR":
        return {
          ...state,
          loading: false,
          post: {},
          error: action.payload
        };
      default:
        return state;
    }
  };

  const [postState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/post/1")
      .then((response) => {
        console.log("hello", response.data);
        dispatch({ type: "SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "ERROR", payload: error.message });
      });
  }, []);

  return (
    <div>
      <h3>Data fetching using useReducer</h3>
      {postState.loading
        ? "Loading!!!"
        : postState.error
        ? postState.error
        : postState.post.title}
    </div>
  );
};

export default DataFetchingWithUseReducer;
