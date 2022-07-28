import { combineReducers } from 'redux';

const INITIAL_STATE = {
  shopItems: [],
};

const reducer = (state = INITIAL_STATE, action) => {
 switch(action.type) {
  case 'RESULT_COMPUTER':
    return {
      ...state,
      shopItems: action.payload,
    }
  default:
    return state;
 }
}

const rootReducer = combineReducers({ reducer })

export default rootReducer;