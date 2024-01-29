export interface AppState {
  counter: number;
  asyncData: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: AppState = {
  counter: 0,
  asyncData: null,
  loading: false,
  error: null,
};

const rootReducer = (state: AppState = initialState, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "FETCH_DATA_START":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        asyncData: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
