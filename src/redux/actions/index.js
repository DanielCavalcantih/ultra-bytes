const action = (type, data) => ({
  type,
  payload: data,
});

export const fetchCategories = () => async dispatch => {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await response.json();
  dispatch(action('CATEGORIES_LIST', data));
}

export const fetchInitialItems = () => async dispatch => {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/search?category=MLB1648');
  const data = await response.json();
  dispatch(action('INITIAL_ITEMS', data.results));
}

export const fetchSearchedItems = (query) => async dispatch => {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
  const data = await response.json();
  dispatch(action('INITIAL_ITEMS', data.results));
}

export const addUserInfo = (data) => ({
  type: 'ADD_USERINFO',
  payload: data,
})