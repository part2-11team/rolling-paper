import axios from 'axios';

const BASE_URL = `https://rolling-api.vercel.app`;

const BASE_ID = '4-11';

const IMGGUT_URL = 'https://api.imgur.com/3/image';

const CLIENT_ID = '4c8db1c88e920c2';

export const getMessageCardData = async (
  userID,
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
      `${BASE_URL}/${BASE_ID}/recipients/${userID}/messages/${queryURL}`,
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
    await axios.delete(`${BASE_URL}/${BASE_ID}/messages/${CardID}/`);
    return { error: null };
  } catch (error) {
    return { error: error };
  }
};
export const getRecipientData = async (userID) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/${BASE_ID}/recipients/${userID}/`,
    );
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
    await axios.delete(`${BASE_URL}/${BASE_ID}/recipients/${userID}/`);
    return { error: null };
  } catch (error) {
    return { error: error };
  }
};

export const getProfileImages = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/profile-images/`);
    return response.data.imageUrls;
  } catch (error) {
    return { error: error };
  }
};

export const postMessage = async (data) => {
  const url = `${BASE_URL}/${BASE_ID}/recipients/${data.recipientId}/messages/`;
  try {
    const response = await axios.post(url, data);
    return { success: true, data: response.data };
  } catch (error) {
    return { error: error };
  }
};

export const getImgUrl = async (file) => {
  try {
    const formData = new FormData();
    formData.append('image', file);
    const response = await axios.post(IMGGUT_URL, formData, {
      headers: {
        Authorization: `Client-ID ${CLIENT_ID}`,
      },
    });
    return response.data.data.link;
  } catch (error) {
    return;
  }
};
