import * as api from '../api';

// Actions Creators
export const getTodos = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTodos();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
}