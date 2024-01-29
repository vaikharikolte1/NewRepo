import { Dispatch } from "redux";

export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
export const fetchDataStart = () => {
  return {
    type: "FETCH_DATA_START",
  };
};

export const fetchDataSuccess = (data: any) => {
  return {
    type: "FETCH_DATA_SUCCESS",
    payload: data,
  };
};

export const fetchDataFailure = (error: string) => {
  return {
    type: "FETCH_DATA_FAILURE",
    payload: error,
  };
};

export const fetchDataAsync = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchDataSuccess("data retrieved successfully"));

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const data = await response.json();

      dispatch(fetchDataSuccess(data));
    } catch (error: any) {
      dispatch(fetchDataFailure(error.toString()));
    }
  };
};
