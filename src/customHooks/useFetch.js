import React, { useReducer, useEffect } from "react";


const intailState = {
  data: [],
  loading: false,
  error: false,
};
function reducer(state, action) {
  console.log(action);
  
  switch (action.type) {
    case "loading":
      return {
        ...state,
        data: [],
        loading: action.payload,
        error: false,
      };
    case "dataFetched":
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      };
      case "error":
        return {
          ...state , 
          data: [],
          loading: false,
          error: true
        }
    
  }
  console.log("state", state);
}
function useFetch(data) {
  const [state, dispatch] = useReducer(reducer, intailState);

  useEffect(() => {
    dispatch({ type: "loading", payload: true });
    const newsApi = fetch(data)
      .then((res) => res.json())
      .then((data) =>
        // const dataNews = data.data;
        // console.log('data',data.data));
        dispatch({ type: "dataFetched", payload: data.data })
      ).catch((e)=>{
        console.log('error',e);
        dispatch({type:"error" })
      });
  }, [data]);
  //   console.log(state);
  return state;
}

export default useFetch;
