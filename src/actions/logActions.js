import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG
} from './types';

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

export function addLog(log) {
  return async function(dispatch) {
    try {
      setLoading();

      const res = await fetch('/logs', {
        method: 'POST',
        body: JSON.stringify(log),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await res.json();

      dispatch({
        type: ADD_LOG,
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

export function deleteLog(id) {
  return async function(dispatch) {
    try {
      setLoading();

      await fetch(`/logs/${id}`, { method: 'DELETE' });

      dispatch({
        type: DELETE_LOG,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.data
      });
    }
  };
}

export function updateLog(log) {
  return async function(dispatch) {
    try {
      setLoading();

      const res = await fetch(`/logs/${log.id}`, {
        method: 'PUT',
        body: JSON.stringify(log),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await res.json();

      dispatch({
        type: UPDATE_LOG,
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

export function setCurrent(log) {
  return {
    type: SET_CURRENT,
    payload: log
  };
}

export function clearCurrent() {
  return {
    type: CLEAR_CURRENT
  };
}

export function setLoading() {
  return {
    type: SET_LOADING
  };
}
