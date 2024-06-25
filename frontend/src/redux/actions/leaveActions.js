import axios from 'axios';

export const getLeaves = () => async dispatch => {
  try {
    const res = await axios.get('/api/leaves');
    dispatch({ type: 'GET_LEAVES', payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const createLeave = leave => async dispatch => {
  try {
    const res = await axios.post('/api/leaves', leave);
    dispatch({ type: 'CREATE_LEAVE', payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const updateLeave = (id, status) => async dispatch => {
  try {
    const res = await axios.put(`/api/leaves/${id}`, { status });
    dispatch({ type: 'UPDATE_LEAVE', payload: res.data });
  } catch (err) {
    console.error(err);
  }
};
