import axios from "axios";

import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING,
  ADD_CATEGORY,
  VIEW_CATEGORY,
  DELETE_CATEGORY
} from "../actions/types";

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios.get("/api/items").then(res =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    })
  );
};

export const addItem = item => dispatch => {
  axios.post("/api/items", item).then(res =>
    dispatch({
      type: ADD_ITEM,
      payload: res.data
    })
  );
};

export const addCategory = category => {
  return {
    type: ADD_CATEGORY,
    payload: category
  };
};

export const viewCategory = () => {
  return {
    type: VIEW_CATEGORY
  };
};

export const deleteItem = id => dispatch => {
  axios.delete(`/api/items/${id}`).then(res =>
    dispatch({
      type: DELETE_ITEM,
      payload: id
    })
  );
};

export const deleteCategory = id => {
  return {
    type: DELETE_CATEGORY,
    payload: id
  };
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
