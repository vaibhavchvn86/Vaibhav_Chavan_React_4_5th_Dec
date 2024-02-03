export const setData = (data) => ({
  type: 'SET_DATA',
  payload: data,
});

export const fetchData = () => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
      dispatch(setData(data));
    })
    .catch((error) => console.error('Error fetching data:', error));
};

// detailActions.js
export const setDetailData = (detail) => ({
  type: 'SET_DETAIL_DATA',
  payload: detail,
});

export const fetchDetailData = (id) => (dispatch) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch(setDetailData(data));
    })
    .catch((error) => console.error('Error fetching details:', error));
};
