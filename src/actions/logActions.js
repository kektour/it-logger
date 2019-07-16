import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './types';

export function getLogs() {
  return async function(dispatch) {
    try {
      setLoading(); // dispatch(setLoading());

      const res = await fetch('/logs');
      const data = await res.json();

      dispatch({
        type: GET_LOGS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.data
      });
    }
  };
}

export function setLoading() {
  return {
    type: SET_LOADING
  };
}
