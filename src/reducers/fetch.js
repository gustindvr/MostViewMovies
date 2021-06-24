import { ACTIONS } from '../actions/fetch';

export const initialState = {
  loading: true,
  error: false,
  data: {},
};

export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_GENERAL_DATA:
      return {
        ...initialState,
        loading: false,
        data: {
          items: action.payload.items,
          results: action.payload.results,
        },
      };
    case ACTIONS.SET_ERROR:
      return {
        ...initialState,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
