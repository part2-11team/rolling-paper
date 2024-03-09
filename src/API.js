import axios from 'axios';
import { getQueryURL } from './assets/utils/getQueryURL';
const BASE_URL = 'https://rolling-api.vercel.app/4-11/';

export const getMessageCardData = async (
  userID,
  limit = null,
  offset = null,
) => {
  const queryURL = getQueryURL(limit, offset);
  try {
    const response = await axios.get(
      `${BASE_URL}recipients/${userID}/messages/${queryURL}`,
    );
    const data = response.data.results;
    const count = response.data.count;
    return { data, count, error: null };
  } catch (error) {
    return { data: null, count: null, error: error };
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
export const getRecipientData = async (userID) => {
  try {
    const response = await axios.get(`${BASE_URL}recipients/${userID}/`);
    const {
      name,
      backgroundColor,
      backgroundImageURL,
      messageCount,
      recentMessages,
      reactionCount,
      topReactions,
    } = response.data;
    return {
      name,
      backgroundColor,
      backgroundImageURL,
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

export const deleteRecipient = async (userID) => {
  try {
    await axios.delete(`${BASE_URL}recipients/${userID}/`);
    return { error: null };
  } catch (error) {
    return { error: error };
  }
};
