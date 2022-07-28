import { combineReducers } from 'redux';

const INITIAL_STATE = {
  categories: [],
  initialItems: [],
  userInfo: {},
};

const reducer = (state = INITIAL_STATE, action) => {
 switch(action.type) {
   case 'ADD_USERINFO':
     return {
       ...state,
       userInfo: action.payload,
     }
  case 'CATEGORIES_LIST':
    return {
      ...state,
      categories: action.payload,
    }
  case 'INITIAL_ITEMS':
    return {
      ...state,
      initialItems: action.payload,
    }
  default:
    return state;
 }
}

const rootReducer = combineReducers({ reducer })

export default rootReducer;