import axios from 'axios';
import { FETCH_USER, ADD_LIST_ITEM, REMOVE_LIST_ITEM } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')

  dispatch({ type: FETCH_USER, payload: res.data });  
};

export const addListItem = content => ({
  type: ADD_LIST_ITEM,
  payload: {
    id: content.imdbID,
    content
  }
});

export const removeListItem = id => ({
  type: REMOVE_LIST_ITEM,
  payload: { 
    id: id 
  }
});

//action creator for the updating of a user's submitted movies
export const updateRankings = (token) => async dispatch => {
  const res = await axios.post('/api/rankings', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

