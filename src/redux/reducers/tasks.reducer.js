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
} from "../types/tasks.type";

const initialState = {
  loading: false,
  data: null,
  error: null
};

export function saveReducer(state=initialState, action) {
  switch (action.type) {
    case TASK_SAVE_INIT:
      return { ...state, loading: true };

    case TASK_SAVE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null
      };

    case TASK_SAVE_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: true
      };

    default:
      return state;
  }
}

export function listReducer(state=initialState, action) {
  switch (action.type) {
    case TASK_LIST_INIT:
      return { ...state, loading: true };

    case TASK_LIST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null
      };

    case TASK_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
}

export function getByIdReducer(state=initialState, action) {
  switch (action.type) {
    case TASK_GET_BY_ID_INIT:
      return { ...state, data: null, loading: true };

    case TASK_GET_BY_ID_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null
      };

    case TASK_GET_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
}

export function removeByIdReducer(state=initialState, action) {
  switch (action.type) {
    case TASK_REMOVE_BY_ID_INIT:
      return { ...state, loading: true };

    case TASK_REMOVE_BY_ID_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null
      };

    case TASK_REMOVE_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
}