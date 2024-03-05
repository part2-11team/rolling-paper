import axios from 'axios';

const BASE_URL = 'https://rolling-api.vercel.app/4-11/';

export const getRecipientData = async (userID) => {
  try {
    const response = await axios.get(`${BASE_URL}recipients/${userID}/`);
    const { name, messageCount, recentMessages, reactionCount, topReactions } =
      response.data;
    return {
      name,
      messageCount,
      recentMessages,
      reactionCount,
      topReactions,
      error: null,
    };
  } catch (error) {
    return { error: error };
  }
};
