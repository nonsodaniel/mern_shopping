import uuid from "uuid";
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "../actions/types";

const initialState = {
  items: [
    { id: uuid(), name: "eggs" },
    { id: uuid(), name: "yam" },
    { id: uuid(), name: "potato" },
    { id: uuid(), name: "beans" }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state
      };
    case GET_ITEMS:
      return {
        ...state,
        items: state.items.filter(item => item.id != action.payload)
      };
    default:
      return state;
  }
}
