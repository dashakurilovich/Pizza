import axios from 'axios';

export const setLoading = (payload) => ({
  type: 'SET_LOADING',
  payload,
})

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  console.log(sortBy, category);
  dispatch(setLoading(false));
  axios.get(`http://localhost:3001/pizzas?category=${category}&_sort=${sortBy}&_order=desc`).then(({ data }) => {
    dispatch(setPizzas(data))
  })
}

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items
})