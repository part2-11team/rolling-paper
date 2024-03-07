import axios from 'axios';

const BASE_URL = 'https://rolling-api.vercel.app/4-11/';

export const getEmojiData = async (userID) => {
  try {
    const response = await axios.get(
      `${BASE_URL}recipients/${userID}/reactions/`,
    );
    const { results } = response.data;

    return {
      results,
      error: null,
    };
  } catch (error) {
    return { error: error };
  }
};

export const postEmoji = async (userID, emoji) => {
  try {
    const data = {
      emoji: emoji,
      type: 'increase',
    };
    const response = await axios.post(
      `${BASE_URL}recipients/${userID}/reactions/`,
      data,
    );
    return response;
  } catch (error) {
    return { error: error };
  }
};
