import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

async function doGet(url: string) {
  const response = await api.get(url);

  return response.data;
}

export { doGet };
