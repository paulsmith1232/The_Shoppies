import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')

  dispatch({ type: FETCH_USER, payload: res.data });  
};

//action creator for the updating of a user's submitted movies
export const updateRankings = (token) => async dispatch => {
  const res = await axios.post('/api/rankings', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

