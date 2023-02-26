// const BASE_URL = "https://pixabay.com/api/";
// export function getData(path = "") {
//   return fetch(`${BASE_URL}${path}`).then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error(response.statusText);
//   });
// }


import axios from 'axios';

const API_KEY = '33932006-79f38c9b6065fca1824d3cdc5';
const baseURL = `https://pixabay.com/api/`;

axios.defaults.baseURL = baseURL;

export async function getData(input, page) {
  const params = {
    key: API_KEY,
    q: input,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 40,
    page: page,
  };
  return await axios.get('/', { params });
}