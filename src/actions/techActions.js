import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR
} from './types';

export function getTechs() {
  return async function(dispatch) {
    try {
      dispatch(setLoading());

      const res = await fetch('/techs');
      const data = await res.json();

      dispatch({
        type: GET_TECHS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err.response.statusText
      });
    }
  };
}

export function setLoading() {
  return {
    type: SET_LOADING
  };
}
