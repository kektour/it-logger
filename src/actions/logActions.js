import {
  GET_LOGS,
  SET_LOGS_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS
} from './types';

export function getLogs() {
  return async function(dispatch) {
    try {
      dispatch(setLoading());

      const res = await fetch('/logs');
      const data = await res.json();

      dispatch({
        type: GET_LOGS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText
      });
    }
  };
}

export function searchLogs(text) {
  return async function(dispatch) {
    try {
      dispatch(setLoading());

      const res = await fetch(`/logs?q=${text}`);
      const data = await res.json();

      dispatch({
        type: SEARCH_LOGS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText
      });
    }
  };
}

export function addLog(log) {
  return async function(dispatch) {
    try {
      dispatch(setLoading());

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
        payload: err.response.statusText
      });
    }
  };
}

export function deleteLog(id) {
  return async function(dispatch) {
    try {
      dispatch(setLoading());

      await fetch(`/logs/${id}`, { method: 'DELETE' });

      dispatch({
        type: DELETE_LOG,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText
      });
    }
  };
}

export function updateLog(log) {
  return async function(dispatch) {
    try {
      dispatch(setLoading());

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
        payload: err.response.statusText
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
    type: SET_LOGS_LOADING
  };
}
