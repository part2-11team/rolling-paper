import axios from 'axios';

const defaultInstance = axios.create({
  baseURL: 'https://rolling-api.vercel.app/4-11',
  timeout: 10000,
});

const fetch = async (options) => {
  const client = defaultInstance({ ...options });
  await client;
  return client;
};

export default fetch;
