import axios from 'axios';

export const setLoading = () => ({
  type: 'SET_LOADING',
  payload: false
})

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch(setLoading(false));
  axios
    .get(
      `/pizzas?${category !== null ? `category=${category}` : ''
      }&_sort=${sortBy.type}&_order=${sortBy.order}`).then(({ data }) => {
        dispatch(setPizzas(data))
      })
}

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items
})