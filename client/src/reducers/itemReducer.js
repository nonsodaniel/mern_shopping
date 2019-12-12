// import uuid from "uuid";
import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING,
  ADD_CATEGORY,
  VIEW_CATEGORY,
  DELETE_CATEGORY
} from "../actions/types";

const initialState = {
  // items: [
  //   { id: uuid(), name: "eggs" },
  //   { id: uuid(), name: "yam" },
  //   { id: uuid(), name: "potato" },
  //   { id: uuid(), name: "beans" }
  // ],
  // categories: [
  //   { id: uuid(), name: "news" },
  //   { id: uuid(), name: "sport" },
  //   { id: uuid(), name: "politics" },
  //   { id: uuid(), name: "Socials" }
  // ]
  items: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };

    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload)
      };
    case ADD_CATEGORY: {
      return {
        ...state,
        category: [action.payload, ...state.category]
      };
    }
    case DELETE_CATEGORY:
      console.log("Action", action.payload, state.cat);
      return {
        ...state,
        categories: state.categories.filter(cat => cat._id !== action.payload)
      };
    case VIEW_CATEGORY: {
      return {
        ...state
      };
    }
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
}
