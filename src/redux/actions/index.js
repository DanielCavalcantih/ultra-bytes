const actionComputers = (data) => ({
  type: 'RESULT_COMPUTER',
  payload: data,
});

export const fetchComputers = () => async (dispatch) => {
  const url = 'https://api.mercadolibre.com/sites/MLB/search?category=MLB1648';
  const response = await fetch(url);
  const data = await response.json();
  dispatch(actionComputers(data.results));
}