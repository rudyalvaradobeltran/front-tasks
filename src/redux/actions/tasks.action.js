import {
  TASK_SAVE_INIT,
  TASK_SAVE_SUCCESS,
  TASK_SAVE_FAILURE,
  TASK_LIST_INIT,
  TASK_LIST_SUCCESS,
  TASK_LIST_FAILURE,
  TASK_GET_BY_ID_INIT,
  TASK_GET_BY_ID_SUCCESS,
  TASK_GET_BY_ID_FAILURE,
  TASK_REMOVE_BY_ID_INIT,
  TASK_REMOVE_BY_ID_SUCCESS,
  TASK_REMOVE_BY_ID_FAILURE
} from '../types/tasks.type';
import APIService from '../../services/APIService';

export const init = () => async (dispatch) => {
  dispatch({
    type: TASK_GET_BY_ID_INIT
  });
}

export const save = (task, id) => async (dispatch) => {
  dispatch({
    type: TASK_SAVE_INIT
  });

  if(id !== undefined) {
    task.id = id;
  }

  const url = '/tasks/save';

  await APIService(
    {
      method: 'POST',
      url: url,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        task: task
      }
    }
  ).then(res => {
    if (res.data !== null) {
      dispatch({
        type: TASK_SAVE_SUCCESS,
        payload: res.data.message
      });
    } else {
      dispatch({
        type: TASK_SAVE_FAILURE,
        payload: res.message
      });
    }
  })
  .catch(error => {
    if(error.message){
      dispatch({
        type: TASK_SAVE_FAILURE,
        payload: error.message
      });
    }else{
      dispatch({
        type: TASK_SAVE_FAILURE,
        payload: 'Oops something went wrong'
      });
    }
  });
}

export const list = (page) => async (dispatch) => {
  dispatch({
    type: TASK_LIST_INIT
  });

  const url = `/tasks/list/${page}`;

  await APIService(
    {
      method: 'GET',
      url: url,
      headers: {
        'Content-Type': 'application/json',
      }
    }
  ).then(res => {
    if (res.data !== null) {
      dispatch({
        type: TASK_LIST_SUCCESS,
        payload: res.data
      });
    } else {
      dispatch({
        type: TASK_LIST_FAILURE,
        payload: res.message
      });
    }
  })
  .catch(error => {
    if(error.message){
      dispatch({
        type: TASK_LIST_FAILURE,
        payload: error.message
      });
    }else{
      dispatch({
        type: TASK_LIST_FAILURE,
        payload: 'Oops something went wrong'
      });
    }
  });
}

export const getById = (id) => async (dispatch) => {
  dispatch({
    type: TASK_GET_BY_ID_INIT
  });

  const url = `/tasks/${id}`;

  await APIService(
    {
      method: 'GET',
      url: url,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  ).then(res => {
    if (res.data !== null) {
      dispatch({
        type: TASK_GET_BY_ID_SUCCESS,
        payload: res.data
      });
    } else {
      dispatch({
        type: TASK_GET_BY_ID_FAILURE,
        payload: res.message
      });
    }
  })
  .catch(error => {
    if(error.message){
      dispatch({
        type: TASK_GET_BY_ID_FAILURE,
        payload: error.message
      });
    }else{
      dispatch({
        type: TASK_GET_BY_ID_FAILURE,
        payload: 'Oops something went wrong'
      });
    }
  });
}

export const removeById = (id) => async (dispatch) => {
  dispatch({
    type: TASK_REMOVE_BY_ID_INIT
  });

  const url = `/tasks/remove/${id}`;

  await APIService(
    {
      method: 'DELETE',
      url: url,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  ).then(res => {
    if (res.data !== null) {
      dispatch({
        type: TASK_REMOVE_BY_ID_SUCCESS,
        payload: res.data
      });
    } else {
      dispatch({
        type: TASK_REMOVE_BY_ID_FAILURE,
        payload: res.message
      });
    }
  })
  .catch(error => {
    if(error.message){
      dispatch({
        type: TASK_REMOVE_BY_ID_FAILURE,
        payload: error.message
      });
    }else{
      dispatch({
        type: TASK_REMOVE_BY_ID_FAILURE,
        payload: 'Oops something went wrong'
      });
    }
  });
}