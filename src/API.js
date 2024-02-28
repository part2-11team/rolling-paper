import axios from 'axios';

const BASE_URL = 'https://rolling-api.vercel.app/4-11/';

export const getMessageCardData = async (
  userID = 2719,
  limit = null,
  offset = null,
) => {
  let queryURL = '';
  if (limit || offset) {
    queryURL += '?';
    if (limit) {
      queryURL += `limit=${limit}`;
      if (offset) {
        queryURL += `&offset=${offset}`;
      }
    } else {
      queryURL += `offset=${offset}`;
    }
  }
  try {
    const response = await axios.get(
      `${BASE_URL}recipients/${userID}/messages/${queryURL}`,
    );
    const data = response.data.results;
    return { data: data, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
};

export const deleteMessageCardData = async (CardID) => {
  try {
    await axios.delete(`${BASE_URL}messages/${CardID}/`);
    return { error: null };
  } catch (error) {
    return { error: error };
  }
};
/* eslint-disable */
export const getRecipientData = async (userID) => {
  try {
    const response = await axios.get(`${BASE_URL}recipients/${userID}/`);
    const { name, backgroundColor, backgroundImageURL, messageCount } =
      response.data;
    return {
      name,
      backgroundColor,
      backgroundImageURL,
      messageCount,
      error: null,
    };
  } catch (error) {
    return { error: error };
  }
};
