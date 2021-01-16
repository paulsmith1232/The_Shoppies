import { ADD_LIST_ITEM, REMOVE_LIST_ITEM } from '../actions/types';

const initialState = {
  allIds: [],
  byIds: {} 
}

export default function (state = initialState, action) {
  switch(action.type) {
    case ADD_LIST_ITEM:{
      const { id, content } = action.payload;      

      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content
          }
        }
      };
    }
    case REMOVE_LIST_ITEM:{
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id]
          }
        }
      }
    }
    default: 
      return state;
  }
}