import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_TECHS_LOADING,
  TECHS_ERROR
} from '../actions/types';

const initialState = {
  techs: null,
  loading: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        loading: false,
        techs: action.payload
      };
    case SET_TECHS_LOADING:
      return {
        ...state,
        loading: true
      };
    case TECHS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
